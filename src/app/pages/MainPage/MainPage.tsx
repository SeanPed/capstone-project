import React from 'react';
import type { ItemCard } from '../../../types';
import AddButton from '../../components/AddButton/AddButton';
import Card from '../../components/Card/Card';
import MalusBar from '../../components/MalusBar/MalusBar';
import TopBar from '../../components/TopBar/TopBar';
import useLocalStorage from '../../utils/hooks/useLocalStorage';

import classes from './MainPage.module.css';

export default function MainPage(): JSX.Element {
  const [itemCards, setItemCards] = useLocalStorage<ItemCard[]>(
    'itemCards',
    []
  );
  const weightArray: number[] = [];

  function deleteFunction(itemIndex: number) {
    setItemCards(itemCards.filter((_item, index) => index !== itemIndex));
  }

  function addWeights() {
    {
      itemCards.map((item) => weightArray.push(item.itemWeight));
    }
  }
  addWeights();

  let combinedWeight = 0;
  for (let i = 0; i < weightArray.length; i++) {
    combinedWeight += weightArray[i];
  }

  return (
    <div className={classes.mainpage_div}>
      <div className={classes.header_div}>
        <TopBar currentWeight={combinedWeight} />
      </div>
      <div className={classes.card_area_div}>
        {combinedWeight > 20 && (
          <div className={classes.malus_div}>
            <MalusBar />
          </div>
        )}
        <div className={classes.button_div}>
          <AddButton />
        </div>
        {itemCards.map((item) => (
          <Card
            key={itemCards.indexOf(item)}
            deleteFunction={() => {
              deleteFunction(itemCards.indexOf(item));
            }}
            itemTitle={item.itemName}
            itemDescription={item.itemDescription}
            itemWeight={item.itemWeight}
          />
        ))}
      </div>
    </div>
  );
}
