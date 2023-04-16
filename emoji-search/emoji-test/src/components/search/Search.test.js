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
    // asagıdakı test objesını kısaca anlatacak olursak bılesen dogru sekılde render edılıyor mu edılmıyor mu ona bakıyoruz.
    test("Render to search component", ()=>{
        // screen objesı domda render edılmıs öğeleri almamızı sağlıyor
        expect(screen.getByText("Emoji Search")).toBeInTheDocument(); // emohjı search metnı gozukuyor mu gozukmuyor mu ona baktık
        expect(screen.getByPlaceholderText("Search emoji")).toBeInTheDocument(); // search emojı yazan yazan tutucu gozukuyor mu ? 
    
        const img = screen.getAllByRole("img"); // tum ımg oglerını aldık ve asagıda bazıları gozukuyor mu dıye baktık. 
        expect(img[0]).toHaveAttribute("alt", "grin-cat");
        expect(img[1]).toHaveAttribute("alt", "grinning-cat");
        
    });
});