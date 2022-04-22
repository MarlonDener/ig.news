import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
    createAction = false
) {
    // Buscar o usuário no banco do FaunaDB com o ID {CustomerId}
    // Salvar os dados da subscription no FaunaDB
    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'),
                    customerId
                )
            )
        )
    )
    
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    // Só é possível comprar um único produto nessa aplicação, então sempre será o index 0 do array.
    const itemIndex = 0;

    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[itemIndex].price.id,
    }

    console.log(subscriptionData, "DELETO")

    if(createAction) {
        await fauna.query(
            q.Create(
                q.Collection('subscriptions'),
                { data: subscriptionData }
            )
        )
    } else {
        await fauna.query(
            q.Replace(
                q.Select(
                    "ref",
                    q.Get(
                        q.Match(
                            q.Index('subscription_by_id'),
                            subscriptionId,
                        )
                    )
                ),
                { data: subscriptionData }
            )
        )
    }
} 