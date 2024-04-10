import { render, screen } from '@testing-library/react'
import UserList from '../../src/components/UserList'
import { User } from '../../src/entities'

describe('UserList', () => {
    it('should render no users when the users arrays is empty', () => {
        render(<UserList users={[]}/>)
        screen.getByText(/no users/i)
    })
    it('should render a list of users', () => {
        const users: User[] = [
            { id: 12312, name: "cristhian"},
            { id: 52525, name: "David"},
        ]
        render(<UserList users={users}/>)
        
        expect(screen.getAllByRole('listitem').length).toBe(2)
    })

    it('should render a list of users 2', () => {
        const users: User[] = [
            { id: 12312, name: "cristhian"},
            { id: 52525, name: "David"},
        ]
        render(<UserList users={users}/>)
        
        users.forEach(user => {
            const link = screen.getByRole('link', {
                name: user.name
            } )
            expect(link).toBeInTheDocument()
            expect(link).toHaveAttribute('href', `/users/${user.id}`)
        })
    })
})