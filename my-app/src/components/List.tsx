import { ImageComponent } from "./Images";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
interface Item {
    
    text: string;
}
const srcList = '/listIcon.svg';
const items: Item[] = [
    { text: 'Best Seller All Around World'},
    { text: '$2M+ Transections Every Day'},
    { text: 'Secure Transactions'},
    { text: 'Exclusive Collections From Sellers'},
    { text: 'Easy Buying and Selling'},
    { text: 'Join Our Community'},
]
const List: React.FC = () => (
    <ul className="gap-3 flex flex-col">
        {items.map((item, index) => (
            <li className="opacity-[0.7] text-[#12141D] flex flex-row gap-2" key={index}><CheckCircleIcon className="w-[25px] h-[25px] text-[#12141D]"></CheckCircleIcon>{item.text}</li>
        ))}
    </ul>
);
export default List;