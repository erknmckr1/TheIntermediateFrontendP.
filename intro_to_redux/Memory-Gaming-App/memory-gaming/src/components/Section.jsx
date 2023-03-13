import { useSelector,useDispatch } from "react-redux";
import Card from "./Card";
import { useEffect} from "react";
import { matchedCard,returnCard } from "../redux/CardsSlice";




function Section() {

  const { chooseFirst, chooseSecond, cards } = useSelector(
    (state) => state.cardsSlice
  );
  const dispatch = useDispatch()

    useEffect(() => {
      async function fetchData() {
        if (chooseFirst && chooseSecond) {
          await dispatch(matchedCard());
        }
        
        if (!chooseSecond.matched && !chooseFirst.matched) {
          setTimeout(async () => {
            await dispatch(returnCard());
          }, 1000);
        }
      }
      fetchData();
    }, [dispatch, chooseFirst, chooseSecond]);

  

  return (
    <div className="cards_table">
      {cards.map((card) => (
        <Card
          card={card}
          key={card.id}
        />
       
      ))}
       
    </div>
  );
}

export default Section;
