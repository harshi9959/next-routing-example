import { useRouter } from 'next/router'

function productdetail() {
        const router = useRouter()
        const productid = router.query.productid
        return<h1>details of the product {productid}</h1>
}

export default productdetail