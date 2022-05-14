import { Facebook, Instagram, Pinterest, Twitter, MailOutline, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () =>{
    return(
        <Container>
            <Left>
                <Logo>LABAJ</Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum semper lorem pellentesque vestibulum. Nam id erat libero. Maecenas ac efficitur nulla. Sed lacinia diam ut dapibus dictum. Donec vitae metus tincidunt, sagittis ipsum feugiat, blandit eros. Maecenas euismod sapien vitae lorem cursus volutpat nec ac orci</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook className="cursor-pointer" />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram className="cursor-pointer" />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter className="cursor-pointer" />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest className="cursor-pointer" />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful</Title>
                <List>
                    <ListItem className="cursor-pointer">Home</ListItem>
                    <ListItem className="cursor-pointer">Cart</ListItem>
                    <ListItem className="cursor-pointer">Man Fashion</ListItem>
                    <ListItem className="cursor-pointer">Woman Fashion</ListItem>
                    <ListItem className="cursor-pointer">Accessories</ListItem>
                    <ListItem className="cursor-pointer">My Account</ListItem>
                    <ListItem className="cursor-pointer">Order Tracking</ListItem>
                    <ListItem className="cursor-pointer">Wishlist</ListItem>
                    <ListItem className="cursor-pointer">Wishlist</ListItem>
                    <ListItem className="cursor-pointer">Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> 999 LoremIpsum , Lorem ipsum 22400
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} /> +48 797956155
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> mateusz.labaj99@gamil.com
                </ContactItem>
                <Payment className="cursor-pointer" src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer;