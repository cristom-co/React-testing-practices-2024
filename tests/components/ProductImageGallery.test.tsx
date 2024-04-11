import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('productImageGallery', () => {
    it('should render nothing if given an empty array', () => {
        const {container} = render(<ProductImageGallery imageUrls={[]} />)
        
        expect(container).toBeEmptyDOMElement();
    })

    it('should render a list of images', () => {  
        const imagesUrls = ["image1", "image2"]
        render(<ProductImageGallery imageUrls={imagesUrls} />)

        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(2)
        imagesUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute("src", url)
        })
    })
})