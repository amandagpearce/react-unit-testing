import { render, screen } from "@testing-library/react";
import Async from "./Async";

// unit tests for asynchronous code
describe('Async component', () => {
    test('renders posts if request succeeds', async() => {
        // Mocking the fetch 
        window.fetch = jest.fn(); // overriding the component fetch to a jest function
        window.fetch.mockResolvedValueOnce({ // this object is what would be returned in the component fetch
            json: async () => { // is async because response.json() returns a promise
                return [{
                    id: 'p1', // mocking the data array 
                    title: 'first post',
                }]
            }
        });

        render(<Async />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})