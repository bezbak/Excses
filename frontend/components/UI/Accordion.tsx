  import React, { ReactElement, useState } from 'react';
  import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
  import { HiOutlineChevronRight } from 'react-icons/hi';
  import styled from 'styled-components';
  import Image from 'next/image';

  interface Category {
    name: string;
    categoryIcon:  string;
    subcategories: string[];
    subCategorieLinks: string[];
  }

  interface Props {
    categories: Category[];
  }

  const AccordionComponent: React.FC<Props> = ({ categories }) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (
      event: React.ChangeEvent<{}>,
      isExpanded: boolean
    ) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <AccordionContainer>
        {categories.map((category, index) => (
          <StyledAccordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<HiOutlineChevronRight />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Image 
              src={category.categoryIcon}
              alt= {category.name}
              height={24}/>
              <Typography fontSize={16} marginLeft="10px" > {category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                {category.subcategories.map((subcategory, index) => (
                  <Typography key={index} fontSize={14} >
                    {subcategory}
                  </Typography>
                ))}
              </div>
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </AccordionContainer>
    );
  };

  const AccordionContainer = styled.div`
    width: 250px;
  `;

  const StyledAccordion = styled(Accordion)`
    &:hover {
      background-color: #f5f5f5;
    }
  `;

  export default AccordionComponent;
