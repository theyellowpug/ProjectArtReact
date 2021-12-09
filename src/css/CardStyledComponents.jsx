import styled from "styled-components";
// IMPORT THIS JSX TO USE PREDEFINED
// STYLED CARDS

// container for cards (child div of main)
const Card_FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 1vw;
    flex-grow: 1;
    overflow: hidden;
`;
// profile card
const ProfileCard = styled.div`
    height: 40vh;
    width: 8vw;
    min-width: 230px;
    min-height: 160px;
    padding: 5px 20px;

    background: rgb(254,253,253);
    background: linear-gradient(202deg, rgba(254,253,253,1) 21%, rgba(73,111,173,1) 100%);
    border: 1px solid gray;
    border-radius: 10px;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;

    &:hover{
        border-color: #496fad;
        background: rgb(238,174,202);
        background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
        cursor: pointer;
    }
`;

// product & service card
const ItemCard = styled.div`
    margin: 3px 3px;
    padding: 0.42vh 0.6vw;
    padding-left: 0.4vw;
    width: 18vw;
    height: 21vh;
    min-width: 250px;
    min-height: 150px;
    background: radial-gradient(circle, rgba(182,197,222,1) 0%, rgba(164,183,214,1) 100%); 
    color: #1d2c45;

    border-radius: 4px;
    border: 1px solid #4d4e5080;
    box-shadow: 3px 3px #00000040;

    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-self: center;
    
    transition: all 100ms ease;
    &:hover{
        cursor: pointer;
        margin: 5px 5px;
        background: radial-gradient(circle, rgba(182,197,222,1) 0%, rgba(200,211,230,1) 100%); 
        color: #0e1622;
        box-shadow: 1px 1px 0px 0px black;
    }
`;

export {
    ItemCard,
    ProfileCard,
    Card_FlexContainer
}
