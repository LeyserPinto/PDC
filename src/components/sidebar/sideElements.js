import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`

position: fixed;
z-index:999;
width:100%;
height:100%;
background: #fff;
display:grid;
align-items:center;
top:0;
left:0;
transition:all 0.3s ease-in-out;
opacity: ${({isOpen})=> (isOpen ? '100%' :'0')};
top: ${({isOpen})=> (isOpen ? '0' : '-100%')};

`;

export const CloseIcon = styled(FaTimes)`
    color: #010606;
`;

export const Icon = styled.div`

position: absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align:center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(6,60px);
}
`

export const SidebarWrapper= styled.div`
color:#FFF;

`

export const SidebarLink = styled(LinkS)`
position:relative;
display:flex;
align-items:center;
justify-content:center;
font-size: 1.5rem;
text-decoration:none;
list-style:none;
color:#017FDE;
cursor:pointer;
transition:0.3s ease-in-out;
&::before{
    content:'';    
    position:absolute;
    top:60px;
    right:0;
    bottom:0;
    left:25%;
    width:50%;
    height:2px;
    background:#010101;    
    transform: scale(0);    
    transition:all 0.2s ease-in-out;
 }
&:hover{
    color:#FE9907;
    transform:scale(1.2);
    transition:0.3s ease-in-out;
    &::before{        
        transform: scale(1);        
        transition:all 0.2s ease-in-out;
    }
}

`


export const SidebarWrap = styled.div`
display:flex;
justify-content:center;
`
export const SidebarExtLink = styled(LinkS)`
display:flex;
align-items:center;
margin: 0 15px;
justify-content:center;
font-size: 1.5rem;
text-decoration:none;
list-style:none;
transition:0.2s ease-in-out;
color:#017FDE;
cursor:pointer;

&:hover{
    color:#010101;
    transform:scale(1.2);
    transition:0.2s ease-in-out;
}

`
export const SidebarRoute = styled(LinkR)`
border-radius: 50px;
font-weight:500;
background: #017FDE;
white-space:nowrap;
padding: 16px 64px;
color: #FFF;
font-size:16px;
outline:none;
border:none;
cursor:pointer;

transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition:all 0.2s ease-in-out;
    background: #00337C;
    color: #FE9907;
}

`