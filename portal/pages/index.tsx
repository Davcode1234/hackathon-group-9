import React, {useState} from "react"
import styles from "../styles/Home.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Item from '../components/item'

const data = [
 {
    id: "1234",
    createdAt: "12:23",
    url: "test.com",
    upvotes: "21",
    downvotes: "32"
  },

  {
    id: "1233424",
    createdAt: "13:23",
    url: "test12.com",
    upvotes: "221",
    downvotes: "321"
  },
  {
    id: "1243234",
    createdAt: "13:23",
    url: "test123.com",
    upvotes: "24",
    downvotes: "72"
  }
]

const Home = () => {
  const [webUrl, setWebUrl] = useState('')

  const filtered = data.filter((item) => item.url === webUrl)
  const items = filtered.length ? filtered : data

  return (
    <>
    <div className={styles.container}>
    <Box
    sx={{
      width: 500,
      maxWidth: '100%',
    }}
  >
    <TextField fullWidth label="Search" id="fullWidth" onChange={e => setWebUrl(e.target.value)} />
  </Box>
  <Button variant="text">Search</Button>
  </div>

<div className={styles.items}>
  <div className={styles.itemContainer}>
      {items.map((el) => {
        return(
          <div className={styles.itemWrapper} key={el.url}>
            <Item  time={el.createdAt} url={el.url} upvotes={el.upvotes} downvotes={el.downvotes} ></Item>
          </div>
        )
      })} 
  </div>
 </div>
  
  </>
  );
};

export default Home;
