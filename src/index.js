import { cons, car, cdr, toString as pairToString } from '@hexlet/pairs'; // eslint-disable-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons as consList, reduce} from '@hexlet/pairs-data'; // eslint-disable-line

export default (listOfCoordinates) => {
  let currentList = l();
  const isItSafe = reduce((currentCoordY, acc) => {
    if (!car(acc)) {
      return cons(false, l());
    }
    currentList = cdr(acc);
    const isThisItemSafe = reduce((coordY, coordX) => {
      if (currentCoordY === coordY) {
        return false;
      }
      if (Math.abs(currentCoordY - coordY) === coordX || !coordX) {
        return false;
      }
      return coordX + 1;
    }, 1, currentList);
    currentList = consList(currentCoordY, currentList);
    if (isThisItemSafe !== false) {
      return cons(true, currentList);
    }
    return cons(false, l());
  }, cons(true, l()), listOfCoordinates);
  return car(isItSafe);
};
