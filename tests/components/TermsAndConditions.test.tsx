import { render, screen, fireEvent } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndCondition', () => {
    
    const renderComponent = () => {
        render(<TermsAndConditions />)
    
        return {
            heading: screen.getByRole('heading'),
            checkbox: screen.getByRole('checkbox'),
            button: screen.getByRole('button')
        }
    }

    it('should render with correct text and initial state', () => {
        const { heading, checkbox, button }  = renderComponent();
        
        expect(heading).toHaveTextContent("Terms & Conditions")
        expect(checkbox).not.toBeChecked()
        expect(button).toBeDisabled()
    })

    it('should enable the button when the checkbox is checked', () => {
        const { checkbox, button } = renderComponent();
        
        fireEvent.click(checkbox)
        expect(button).toBeEnabled()
    })

    it('should enable the button when the checkbox is checked 2', async () => {

        const { checkbox } = renderComponent();
        
        const user = userEvent.setup();
        await user.click(checkbox);

        expect(screen.getByRole('button')).toBeEnabled()
    })
})