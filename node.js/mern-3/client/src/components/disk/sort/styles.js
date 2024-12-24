import styled from 'styled-components'

export const SelectWrapper = styled.select`
position: relative;
display:inline-block;
svg{
    position:absolute;
    top: 50%;
    right:0;
    transform:translateY(-50%);
    transition:0.3s;
    &.is-active{
transform: translateY(-50%) rotate(180deg)
    }
}
`
export const Select = styled.select`
padding:0 7px;
border:none;
outline:none;
appearance: none;
font-family:'Roboto';
font-style:normal;
font-size:14px;
color:#566885;
line-height:16px
`