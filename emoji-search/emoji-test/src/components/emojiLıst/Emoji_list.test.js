import { render, screen, fireEvent } from "@testing-library/react";
import EmojiList from "./EmojiList";
import { EmojiProvider } from "../../context/EmojiContext";
import emojiList from "../../data/emojiList.json";
describe("List component to rendering...", () => {
  beforeEach(() => {
    render(
      <EmojiProvider>
        <EmojiList />
      </EmojiProvider>
    );
  });

  test("Show list",()=>{
    const emoji = emojiList.slice(0,10) // ılk 10 emojıyı alalım listelenıyor mu bakalım.
    emoji.map(item=>{
        return expect(screen.getByText(item.title)).toBeInTheDocument()
    })
  })
  test("Clicking on the copy text will copy the emoji", () => {
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: jest.fn(),
      },
      writable: true,
    });

    const copyBtn = screen.getAllByText("Click to copy emoji");
    fireEvent.click(copyBtn[0]);
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  });

  test("Appropriate emoji should be rendered when filtering is done", () => {
    const filter = "grin";
    

    const filteredEmojies = emojiList.filter((item) => {
     return item.keywords.toLocaleLowerCase().match(filter) ||
        item.title.toLowerCase().match(filter);
        
    });
    expect(filteredEmojies).toHaveLength(3);


    console.log(filteredEmojies)
    filteredEmojies.forEach((emoji) => {
      expect(screen.getByText(emoji.title)).toBeInTheDocument();
    });
    filteredEmojies.forEach((emoji) =>
      expect(screen.getByText(emoji.symbol)).toBeInTheDocument()
    );
  });


});
