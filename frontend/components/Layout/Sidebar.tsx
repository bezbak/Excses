import React, { useState } from 'react';

import AccordionComponent from '@UI/Accordion';

import MensIcon from '@icons/men.svg';
import WomnIcon from '@icons/women.svg';
import BoysIcon from '@icons/boy.svg';
import GirlIcon from '@icons/girl.svg';
import SpecIcon from '@icons/spec.svg';
import OthrIcon from '@icons/other.svg';
import SewingIcon from '@icons/sewing.svg';
import FabricIcon from '@icons/fabric.svg';
// import SuplrsIcon from '@icons/suppliers.svg';
import BuyersIcon from '@icons/buyers.svg';
import ChatIcon from '@icons/chat.svg';
import Suppliers2Icon from '@icons/suppliers2.svg';
// import Buyers2Icon from '@icons/buyers2.svg';
import AdsBuyersIcon from '@icons/ads-buyers.svg';
// import AdsSuppliersIcon from '@icons/ads-suppliers.svg';
import PartnersIcon from '@icons/partners.svg';
import EilibayIcon from '@icons/eilibay.svg';


interface Category {
  name: string;
  categoryIcon: string;
  subcategories: string[];
  subCategorieLinks: string[];
}

const categories: Category[] = [
  {
    name: 'Мужское',
    categoryIcon: MensIcon ,
    subcategories: ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Женское',
    categoryIcon: WomnIcon,
    subcategories: ['Subcategory 4', 'Subcategory 5', 'Subcategory 6'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Для мальчиков',
    categoryIcon: BoysIcon,
    subcategories: ['Subcategory 7', 'Subcategory 8', 'Subcategory 9'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Для девочек',
    categoryIcon: GirlIcon,
    subcategories: ['Subcategory 10', 'Subcategory 11', 'Subcategory 12'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Спец. одежда',
    categoryIcon: SpecIcon,
    subcategories: ['Subcategory 13', 'Subcategory 14', 'Subcategory 15'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Другое',
    categoryIcon: OthrIcon,
    subcategories: ['Subcategory 16', 'Subcategory 17', 'Subcategory 18'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Услуги пошива',
    categoryIcon: SewingIcon,
    subcategories: ['Subcategory 19', 'Subcategory 20', 'Subcategory 21'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Ткани',
    categoryIcon: FabricIcon,
    subcategories: ['Subcategory 22', 'Subcategory 23', 'Subcategory 24'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Поставщики',
    categoryIcon: BuyersIcon,
    subcategories: ['Subcategory 25', 'Subcategory 26', 'Subcategory 27'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Покупатели',
    categoryIcon: BuyersIcon,
    subcategories: ['Subcategory 28', 'Subcategory 29', 'Subcategory 30'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Чат',
    categoryIcon: ChatIcon,
    subcategories: ['Subcategory 31', 'Subcategory 32', 'Subcategory 33'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Для поставщиков',
    categoryIcon: Suppliers2Icon,
    subcategories: ['Subcategory 34', 'Subcategory 35', 'Subcategory 36'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Для покупателей',
    categoryIcon: BuyersIcon,
    subcategories: ['Subcategory 37', 'Subcategory 38', 'Subcategory 39'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Объявления покупателей',
    categoryIcon:  AdsBuyersIcon,
    subcategories: ['Subcategory 40', 'Subcategory 41', 'Subcategory 42'],
    subCategorieLinks: ['#', '#', '#'],
  },
  {
    name: 'Объявления поставщиков',
    categoryIcon: AdsBuyersIcon,
    subcategories:['Subcategory43','Subcategory44','Subcategory45'],
    subCategorieLinks:["#","#","#"],
    
},
{
name:'Для партнеров Eilibay',
categoryIcon: PartnersIcon,
subcategories:['Subcategory46','Subcategory47','Subcategory48'],
subCategorieLinks:["#","#","#"],
},
{
name:'Eilibay',
categoryIcon:EilibayIcon,
subcategories:['Subcategory49','Subcategory50','Subcategory51'],
subCategorieLinks:["#","#","#"],
},
];


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}






const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div  className={`overflow-hidden absolute z-50 bg-[white] ${isOpen ? "w-[250px]":"w-0"}`}>
        <div>
          {/* <div style={{ display: "flex", justifyContent: "flex-end", padding: "8px" }}>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div> */}
          <AccordionComponent categories={categories} />
        </div>
      </div>
    </>
    
);
};

export default Sidebar;
