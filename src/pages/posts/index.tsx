import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href=''>
                        <time>12 de maio de 2021</time>
                        <strong>There are many variations of passages of Lorem Ipsum available.</strong>
                        <p>It is a long established fact that a reader will be distracted by the readable
                           content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                           more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                           making it look like readable English. </p>
                    </a>
                    <a href=''>
                        <time>12 de maio de 2021</time>
                        <strong>There are many variations of passages of Lorem Ipsum available.</strong>
                        <p>It is a long established fact that a reader will be distracted by the readable
                           content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                           more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                           making it look like readable English. </p>
                    </a>
                    <a href=''>
                        <time>12 de maio de 2021</time>
                        <strong>There are many variations of passages of Lorem Ipsum available.</strong>
                        <p>It is a long established fact that a reader will be distracted by the readable
                           content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                           more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                           making it look like readable English. </p>
                    </a>
                </div>
            </main>
        </>
    );
}