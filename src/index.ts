import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
//numbersCollection.sort();
//console.log(numbersCollection.data);

//const charactersCollection = new CharactersCollection('aTefsbCC');
//const sorter = new Sorter(charactersCollection);
//charactersCollection.sort();
//console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(400);
linkedList.sort();
linkedList.print();
