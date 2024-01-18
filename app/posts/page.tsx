// import styles from './postPage.module.css'; // Jika file CSS tidak digunakan, bisa dihapus

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function Posts() {
    const dataPosts: IPost[] = [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit"
        }
        // Tambahkan data posts lainnya jika diperlukan
    ];

    return (
        <div className={/*styles.post*/ 'post'}>
            <h1>Posts</h1>
            {dataPosts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;
