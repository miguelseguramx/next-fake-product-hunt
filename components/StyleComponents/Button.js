import styled from '@emotion/styled';

const Button = styled('a')`
  display: block;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  padding: .8rem 2rem;
  margin-right: 2rem auto;
  background-color: ${props => props.callToAction ? '#DA552F' : 'white'};
  color: ${props => props.callToAction ? 'white' : '#000' };

  &:last-of-type{
    margin-right: 0;
  }

  &:hover{
    cursor: pointer;
  }
`

export default Button;