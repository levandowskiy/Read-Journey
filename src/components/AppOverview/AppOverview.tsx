import { FC } from 'react';
import { Typography } from '@mui/material';
import {
  InfoBlock,
  Circle,
  InfoWrapper,
  Title,
  StyledLink,
  Icon,
  QuoteBlock,
} from './AppOverview.styled';
import { FaArrowRightLong } from 'react-icons/fa6';

const AppOverview: FC = () => {
  return (
    <div>
      <InfoBlock>
        <Title variant="h3">Start your workout</Title>

        <InfoWrapper>
          <Circle>1</Circle>
          <Typography variant="body1">
            <span>Create a personal library:</span> add the books you intend to
            read to it.
          </Typography>
        </InfoWrapper>
        <InfoWrapper>
          <Circle>2</Circle>
          <Typography variant="body1">
            <span>Create your first workout:</span> define a goal, choose a
            period, start training.
          </Typography>
        </InfoWrapper>

        <StyledLink to={'./library'}>
          My library
          <FaArrowRightLong size={24} />
        </StyledLink>
      </InfoBlock>

      <QuoteBlock>
        <Icon>📚</Icon>
        <Typography variant="body1">
          "Books are windows to the world, and reading is a journey into the 
          unknown."
        </Typography>
      </QuoteBlock>
    </div>
  );
};

export default AppOverview;
