// import React, { useState } from 'react';
// import styled from 'styled-components';

// interface Item {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
// }

// interface Props {
//   items: Item[];
// }

// const CarouselContainer = styled.div`
//   display: flex;
//   overflow-x: scroll;
//   scroll-snap-type: x mandatory;
//   scroll-behavior: smooth;
//   -webkit-overflow-scrolling: touch;
// `;

// const Card = styled.div`
//   width: 200px;
//   height: 300px;
//   background-color: #fff;
//   margin-right: 20px;
//   scroll-snap-align: start;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
// `;

// const CardImage = styled.img`
//   width: 100%;
//   height: 70%;
//   object-fit: cover;
// `;

// const CardContent = styled.div`
//   padding: 10px;
// `;

// const CardTitle = styled.h3`
//   font-size: 18px;
// `;

// const CardDescription = styled.p`
//   font-size: 14px;
// `;

// const Carousel: React.FC<Props> = ({ items }) => {
//   const [scrollPosition, setScrollPosition] = useState<number>(0);

//   const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
//     const newPosition = e.currentTarget.scrollLeft;
//     setScrollPosition(newPosition);
//   };

//   return (
//     <CarouselContainer onScroll={handleScroll}>
//       {items.map((item) => (
//         <Card key={item.id}>
//           <CardImage src={item.image} alt={item.title} />
//           <CardContent>
//             <CardTitle>{item.title}</CardTitle>
//             <CardDescription>{item.description}</CardDescription>
//           </CardContent>
//         </Card>
//       ))}
//     </CarouselContainer>
//   );
// };

// export default Carousel;
