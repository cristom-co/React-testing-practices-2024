import { render, screen } from "@testing-library/react"
import Greet from '../../src/components/Greet'

describe('GREET', () => {
    it('should render hello with the name when the name is provided', () => {
        render(<Greet name="cristhian" />)
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument()
        expect(heading).toHaveTextContent(/cristhian/i)
    })

    it('should render login button when the name is not provided', () => {
        render(<Greet />)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
        expect(button).toHaveTextContent(/login/i)
    })
})