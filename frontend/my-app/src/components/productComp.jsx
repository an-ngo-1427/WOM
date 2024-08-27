import { Container, Image } from "@chakra-ui/react"

function productComp({product}){
    return(
        <Container>
            <Image src={product.imageUrl} alt='No Image Available'/>
            <span>
                {product.name}
            </span>

        </Container>
    )
}

export default productComp
