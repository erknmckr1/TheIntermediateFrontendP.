import {render,screen} from "@testing-library/react"
import Search from './Search';
import { EmojiProvider } from '../../context/EmojiContext';

describe("Search component testing...",()=>{

    // her testten önce baslayacak fonksıyon.
    beforeEach(() => {
        render(
            <EmojiProvider>
                <Search />
            </EmojiProvider>
        );
    });
    test("Render to search component", ()=>{

        expect(screen.getByText("Emoji Search")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Search emoji")).toBeInTheDocument();
    
        const img = screen.getAllByRole("img");
        expect(img[0]).toHaveAttribute("alt", "grin-cat");
        expect(img[1]).toHaveAttribute("alt", "grinning-cat");
        
    });
});