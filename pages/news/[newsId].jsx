import {useRouter} from 'next/router'


function DetailPage () {
    const router = useRouter();

    const newsId = router.query.newsId;

     // this is where you could send a request to backend api
     //or fetch the news items with newsId

    return <h1>The Detail Page</h1>
    }
    
    export default DetailPage;