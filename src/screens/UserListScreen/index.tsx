// UserListScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {ROUTE_NAMES} from '../../navigation/routeNames';

const UserListScreen: React.FC = () => {
  const navigation = useNavigation();

  const users = [
    {
      id: '4',
      name: 'Samira Ahmed',
      imageUrl: 'https://www.simplitoo.fr/media/articles/preview_B0eCXi7.jpeg',
    },
    {
      id: '11',
      name: 'Omar El-Amine',
      imageUrl:
        'https://api.lestricolores.fr/uploads/images/products/personne-physique-ou-morale-ce-quil-vous-faut-savoir-13012022020600081226.jpg',
    },
    {
      id: '12',
      name: 'Fatima Zahra',
      imageUrl:
        'https://img.freepik.com/premium-photo/beautiful-smiling-muslim-woman-woman-posing-front-her-beautiful-house_232070-3052.jpg',
    },
    {
      id: '13',
      name: 'Hassan Mahmoud',
      imageUrl:
        'https://ma-domiciliation.fr/articles/content/images/2020/11/Personne-physique-MaDomiciliation.png',
    },
    {
      id: '14',
      name: 'Lina Fawzi',
      imageUrl:
        'https://w0.peakpx.com/wallpaper/286/639/HD-wallpaper-black-and-white-beautiful-girl-portrait-of-a-girl-face.jpg',
    },
    {
      id: '15',
      name: 'Adnan Khaled',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREkQXUscsyCu7R5K36mmqBz_rxz_XmtmU9A&usqp=CAU',
    },
    {
      id: '16',
      name: 'Rania Salah',
      imageUrl:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFhYYGBgZGBgZGBgVGBgYGBgYGBgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjQrISs0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDE0NDQ0NDQ0MTQ0NDQ/NDQ0NDQxNDQ0P//AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADkQAAEDAgMFBgUDBAEFAAAAAAEAAhEDIQQSMQVBUWFxIoGRobHBBhMy0fBCcuEUUmLxsgcVI4KS/8QAGAEAAwEBAAAAAAAAAAAAAAAAAQIDAAT/xAAiEQACAgMBAAIDAQEAAAAAAAAAAQIREiExA0FREyIycUL/2gAMAwEAAhEDEQA/AMmriiYLiTOsqNTFBrgR5KOMYA3Lv4FZL3HMCVzo7KOrwO14I6rpTtZmXMF56KwiQkzaLoI3I5NcFfjGRe25izUqF24IuzsZlssl+IACiysDok2VxVUdpg8YXGdwW2zF21XHbHxUWPFaWKxwaDESmUqIT8begmO2w4vyjRbuysTIF15/h6jn1Y/IXY7OphsXRjJ2L6wUY0jrWwUi1ZDMVeBwSx+1W0mF7iBAOvH36Klo5ad0adeq1gLnEAC5/N55Li9sfG4EsosB4vcZHcBr6LmNubdfWJkwwaNO8ne/7bgsN7yR11Mx/r/SGV8OiPiluRr4nb1d5l9V3QGNdwA06Ih2tVc3I+q5o4ZiT38FgXGl/wBtz5aITnHeQ0cCb9+9Ch9L4LuMxT2nM1+fm2ZgcZM+Cq09qvP6yOMSPdRz7te+PO6BXYWOsAOgm45opIzbNzC7UqNAu4zoIJnmtfB7fZmbnlh0lwLQfHVcNUrPOpMd6aliHDQ2538QbLYitp9PYcDiw5wtaJBndxC6XCvDxPBeN7C20WDITDdYv2Hf3Mn9PFvOy9I+GMU64e4GRr79Fk90SnCtnRPpg2XIfE+HeC1rSYnmuzhVcflykHzRasSMsXZ5ljcJSc8B85reKNQ+Eg+SBHBw1R9q1GCq2GybiQbTzXSbJ2k0MlxA4yYSovKUlFNHnWIZVwVW4zCdfddRsP4mY+zzCq/GGOpvb2TJE6Lz9r3MdIBM6gIo1ZL9ke1iowjMHCOKoVdq0wQAZmwjj0XC7M2o55FPM68CDaJXaUdgMbBkkkX/AIRtiShGPWGfRY4EEZg835clWxWx6T2taRZunHxWk2g1uiTlqEUmuMyWZKT8jWQCB2hu6pq+Fpg5/pPEWniVoVKcgjSd6G+kC0tN5EX1WoORT+dS/uZ4pLjcZhKge4c+SSWy3419lvE4gFxPWFmYl1lXpViDOqnVJImUtUXu0D+e4b7KJrHcgPemDkaNYYVDKOyqqbCrLErGiaOHxRGlkZ+JJ3qjTCOBvU2VRs7AZ2w48CuubTneuL2TiMpuulw2IzWlGMiHtFvZpxBmbALh9tbUOIqGD/42mG8DH6j7LX+Ktp5KWRp7T+yOQ3lcwWZWgmw3DeBoABqU7dieUKWTKlZxc6BxJgcBxSLmtE6gcd55ckN7wLDw5DjHOUCucxjWPX2CokaTI1Kznakxua2w46b0XB4BzzAtxP2+6hh6eZ2Ud59guw2VhQ0CyWUsdI0Y3tgcB8Osbc3PFXsRsdp1C16LQpuCk2xrOcrbCYR9IXM7W2M5kubu3L0NwWdtOlmabLKTQ2KlpnnmHfcHj5ELuPhbactDDYtHlw7lxWLo5HuHUhaGAxJY/ODpBPSIKs9qyOPYs9VpYp7gMqDiq1cNII71v7Ko03U2PYBDmgiPA+YVjF0m5TZNWjlunw8b2rTqh5IBzHvHgqvysQ8gEnv0XpWJ2c15JyjgEV+x2wCQBpZJTOhesa2eSYrZ9RriS5yBgwe2131T4jkvZcbsFj2/SAYXF7b+CHjtsuReyNM0fSLZyjsJWZle1pkGW8TyXe7A+JmVGBr5D22cN47iquzsPnYA9sObZwO4qptj4baQajXZHDeLJcmPKMZaZ2Ye130uBtNiD5Ibl5xhqeJw5zsfzvK6PA/F9JwDassfvIHZJ6JlKyMvFx4dA5DqODRmcQAN5Qv+40SM2dsd/osPFbdY9xbkljTbMdeZHsi5JCx85P4J4mXOLgJB0uktbC7SpZG6C2lrJkND/t9HmMJOeQE1UcEISVjoBuUgFIsT5VgJCajsKro9EJWPEvU0ccFWYFYpBSZdFugFqYCoWnVZdOyuU3QC7gkYaTKG1MUamJgfpETrlE3gaT91QxL7udN+twOvH7FPRfGdx1JsDv114AcOZVOq6TBP3ud46BXgtkZukRpaknQDusFHOYJ4+pTF3ZtvcB1AuT4lTriAB+XVTnNHY2HkgxvXW4ZmiyNiM7IXRU6ZXPJ2y6pIsUgplqDnATNxbTaR4pRf8JvaqldkhWy+VlbUxwY0krdGicrt6h2pVFgmBHEKWN2i6q42AuAAJOs71Gjq2P7x6q8U1GmTbTlaPTf+m+2JZ8p5s8F7JOj2nK9nfZ3iutxeLbIavFvhTGFji0GCx7ajTybLXjvYT4L0OtirlbLHRCfnk7XybX9W0HRVcbiXl1tFl4bEy6xWhSxInTXegpWK4YmzhnAsbdScFg4nFOZJFxrZBwnxEWWrAZf0uBv0KfJcFXnJq0XtsbMa9rnN7DwDDm2nrC8vx21a7HmnUcXNGn8r1GvtmkWHK7cuI2jh2VHl0iUknEt4qXGc5W2rmELIr03PNtF1J2ewbwqhota6OKCklw6HBy6YrWVmtgPdHNQ+bUAsdOs9912FLDMLeNlXfgG3ICH5F9Bfj9M5z+trcR4fymW5/Qs4pI5r6F/G/swXvTUyqvzFJr1SiakWyVEuQBUUg9LQ6kFhWKSqtKs0H3QY0WXWsU2obXcvVSz3tCmWsvsO5GxbstI7psCee9VKNW9teP2Q9tVzkAGpM9+g9fJLVtIN0mzPbUAYcthJvvIbbzcSVmsqSXHu8bekqxj3ZGMZvgT6nzlVqdh4QOfFdMVqzj9Jbou4anLheA0R3mSfVReZIPEyOkkeyNU7DS3fof3Ou7wAA7kOiJcOGUe6Ng+ToMHjmUmAuk7g0XLjwCs1K2LrDsj5bdwntd6oYUZbxfnuQsXtqpmyU7uHDW3Hh0UUneirqrYbE7Brm7ng9XEqGFw5pb/VG2HhX1XgVnva0AuLixpbIjIIc2TMm3JXjsl8nM3IP7mnsuE6/LJLmTysjK/lgi1fDT2bWzBYHxNUh+Xvv7rZ2I3I/K42Np9E/wAV7IDoeQcpAa6OImOgv6KcVspKXwjg31p+nS9wIsBuE81Ki6D0IjuCs1cMGmA2Bebk+qpsPajp9l0KqIU09ksM7LUIOhLmnp+Qu3G0C5jHEdpoDX/u0PcYlcI53ba7i73grqNmVbQTrEze0AeoHipehXzVo0qO0spB8gFpUtqsi9uqxqmFFzvVZ7SppjuEZHQu2iHyBpxWZtF9oOiqUa0AxqqeKquMyttsygo8A0MSQ4tDjB3K9TquiViYZsutxWy2mYiSjLQY7M/GYqSUFj5cJTY2mQdCh0pF01aNezoMFUixCuBzRKxKWNAHkpOx/NTxdlHJF1zWpLEqbREm6dNgxM4nPSnCinC6TgQRqkFFqksUTCMKM1V2FHakY8WWWPKI1yAHIjClaKJlyhO7yQ8bd4bwAn1siUnIVeA57jwgc0i6P/yY+NfmeSbgaDj15I+DZ2sxuGS53Nx+kKmRmdfqfX0WnQb2OBe4TyBOvg0wujiORblZXxLyYEybz1ME+6u7MbJE72tPcZWU985ndT5/YBauBflez9jfdCXBo/0dbhsA1wAhWW7AZMtAaddAULZ2IiF02FrtcLqCZSVozMNsZwuXd4F1bODDRAH89StYAIWIAhNSJOTZy2JZldPNbYeKtPKd4g9QufxzzncJ+k3R8BthjDkInmPdJey7i2lXTntqYbI5wO4kd25c6Pr8fKF13xPj2PNmxfvgg2PquQP1OPBsDr+BVg7Qs1wZhkt/d7rpMBGvIA8wQVzNH6h191vYSrEExqD4An7JfUbxNtlWW31geIsfRRqEAaLPGJhoG8i/ff3Qn4rio0VHrPLZhZ+JxBKfEYklV1SKFkxYZ+V4K6PC1AQuacEbC4otMEmEZRsWMq0b2KpNcsmvRhWmY1scVWdiATuQVodtMz60g2QHmVfqMlUnwniSkgOVJPKSoT0UkkwTpyJNpU5Q2qYSjIk0o7CgNCKxBjxZYCNTadYJ/OKAw/mqOwqbKou0AG7pduFyBzJ3nkq2PfYzHqfBEouuq2P9UIr9hpP9TPoszGNPOBqT4LQrPhhPN0DgGNgeZCr0Gxe2hPgZ8yR4I9dlg3/ET/7EuPRWOdLRSbR7E8SPt+dVamHtA/SAD1AM+6OWfQ3ib9BCp1KkVH/u93LPZlpnSYCvouiwWKhcrg9AtSi8hc0unSlaOxo4qQiuqSudw2KKtnGRrpzWUicvMr7W2WXvzsdEjtNIMGN4I0WLT+HMl2NjjcnXmdVs1Nu0m2Jk8Gm/iqo289wJYyADH0yCeBcVmPFSMbbGFyDTUi/RpXOPMDr/AL+y1ts4yq8y8ENnUnxA5LGeZM/nJV806E9XsVAdqeH5HgtWmCR1Ak/48B13qhgmAvvoLxuN/NbGJba2qWb3Q3mqjYCpVQi+UJ7kzSlobIdySRKE96ZIVuh3OQyVBz1HMmSJuQT5hSp1oKEShkpqBkaD8VZUH1FGUNyyjQspNk86SDKSehMiIUgVEJIiomFMIQKmHLBTCNRWFDa5Ta9IyiLDGlHa1VmOVqmJ4JGViw9EDj+a+yDim+dyeDeXOPVWabOIjruk/b1VfFuvA1OvIDQH18EI9Gl/JWptzEA7zcDcARI7hAR2uLu1xJM7uX/FCa7IA0Xc4T0EyB3mCisMAdIE8AqkBy/tjlPfDfusnE1O253+X57rRpu7RPBsd7t/msqoZJ/LooST0dDszEAgLapPXE4OuWHkugwuPaYuozidHlNNHQUXwrDsrhDgCN4KyqVWVZY9RoswjwyndtJscWj2UX/ETA0gsbPHLB8VKJWXtMMa3SXbvueSZb6C6RlbUx7qruXIeipGnO63ryRInfPTT+VLH9ghgsQ0E8i6/jCstaRCW9sJhoEn8toOi0qp7PcsmmYIHI9yv4h9u4KclstH+SrVKFmT1HoBKZIRsPKg8KDXqRqLUCwTmoZRnFCcnRNkSVBxUnFCcUyFbJSmKgCpZlhbIwnSlJMAEE5KiE6wg8pwVBSasFBWlEaUJqK1BlEHplWmaDv7+9VGKxh7kJGURpNEAA3Op5RdUcTU/UfpGn+TrR79ysvJDTNp46xyHus2vL3NaPD1J5pYoectULDAuLnnTeeKK99id5sOUj2ElSdAAaLtbw/Uff8AhBcSSBrHqbetu5UJcQ5OWm48dPQKlRAiwn84K1jXgEN1jXqq+HbqOCKEl0T2AET+cloUsPItH5zVCqyy19lOzNHgUs+D+faIML271ap7QcNQVcfhhCz6sAwLn804qWmX4WjtExOnVZlasXkmYA1PsiV2QJeeoGvQLMJL3C0NBs0flymjFCSk+FtlQNGaJANgd53fdBqPLn53GXElxJ0npwlJ5vf9M97t5Q23d0T0I38FinYuOto/lWMQ6w6BVA/6uoHgrde7R3KbWyqf6lRzlGUnlDzJ0iTkO4qOZM5ygSjQrkF+YolyHKUo0CyZKC5TJQnFFAkxBPKiClKIpKUlGUljEUlKE0LCjKQTJ4WMSBRmFAARmIMeLLVP8CuYY9Bx39ypURKvUqLouIHMgWU5FotirGRy3zr3lV3dhuhzutzy8BwnerrhFyQY4XHeqLBLsx3TH3WiNIao/KP26fujVNROSXHdAAP9x+wUHGT0vHHgPRCxLrtZw15k3JTpEmyFQy4zzUqL4gnofYoTzf8AOae2t+5MTssvOo5T3aHzU8A9zHZjYc9SeQQvmWBAuON5TAFx38zvQYye7Oia9zxAvzP0gb7auUhTyzF3b3HdyHDoqezKkSydI04bgrGJqRpaLQoS06OqO1Zm7Tf+lBpNDGlx1Ak/uNmtHiB4qQEuzHQfgCFin3y8Dmd1i3gD4lUXKJSe7AidN+rup3KdHlujvO4IZ/tHf9kQGMoG9w8tUzFXSJMW53Ww7DZmiHAGBqsKfVa1RxyNI3C6nJcK+bVOyriMO5uo8FVIV5mPIkeqd2KaRcBG5L4FcYvjKBCgVaOJYbOHggVWgaaJ0xJRS4wSeUzlFYnY7ioEp3FQlFAbEkknRAJJMksYkE8JAKYCxkQDFMMUw1Ta1YNEWsVllFo+r/5GvedBroostp4qRIb9W/Qe55JWPFUXaDtNGt4i/cN5TVK94APXU357lnVsUOJJ5WA4Dl3J2V4aXQBJ7IjzS4/JT8nwW61STlGm8odZ/D8/lVadQ79T6XU80kDnJRoXKwjBHdqqDny6eJVt77AcTPnb0VJqZE5MThKIxsjW+77J2NJVim7Lv7hr1nctYEiFCnBvPQ/lu9FfWizfECw6cepQq4nf4eRQmFboeGjsp0P4Tz3q9in+KxqL8rp8t3etD5JIzO375/LKcluy8JPGgDqkAu3DTm5U8xuTrczz3lW8SRoNG+ZKqOsmQkhEwOZ8gkH9of438boepUS7U8T5IiWTiy06FUZOohZwb2R1RcM6WkcLoSVoeMqZB7YNlAuUqpM9UIuTIVjPHNO5yi6CmYURLCNTlilhhLwrjmBLJ0PGNozXMUS1aLmBQNMLKRnApQmhWywKJYEchcStCSPkCS1mxJNpqbaSsNaptC1jqIFtJFbRRmJ6lQNBcdAJ/hKGkinXq5AANT+Ss977zvTveXunUk7vTuTV2Q6JlOlRKUmxmXKLVfMDw5IQsOZ9EpRFT0EY+6NT1/N6rsKsUTcd/kLJWNFg31O0eAt4ITrE8indqmdxRQGGDipsCEDv4HyKN7eiwyJu08v4QnM3hWCNekjmgl0HkfwH0ShYJvDwV1tVzWQSTwB3cunFCZTE+Z5WQ8Q7MLaRbuR6FOkM7E7gO/7IeabodMXR2MsfLqtVCptkGjXonDNeSTHXjcAp0/1dEDIm4Q1CoPh/kiVvpHRVi68ooLdMI86jeDZDF7KVc7+MeqgFkK3simTu1TJhWWcM+HBXfmBZlIwZ4I5rpJLZSMqRaNQKJqBVDVTfNQxGzLJqBQLwg/NUS9HEDkGzpIGcpI4i5G+2gjMw6SSUsgzcOsXbNa/yxoILuZOg90kkY9En/JUosDWhx36dFWJE2EcEySdEWOApO0SSWAJiKw37kkkGNEG5IcEklgBGjdxRqbrCehTpLDII3xj0KZ9MbzZJJKP8A6naADbQQmYJBHI/dMksAjTo5oI7+UKbiBAG9JJYC4ReIIPEQeqakb9QQkkmN8j1n2/OKrkpJIAl0IbhQH0pJLIzBpwUkk4hOk2SBxV3+hKSSR9KwSaEcCUwwRSSS2ymCJf0RTHBFMktbNghf0ZSSSWtmwR//9k=',
    },
    {
      id: '17',
      name: 'Tariq Al-Jabri',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuHtjpyczukP7RctTWL5wa0d2-omGJsyfcQ&usqp=CAU',
    },
    {id: '18', name: 'Aisha Badr', imageUrl: 'https://placekitten.com/217/217'},
    {
      id: '19',
      name: 'Ibrahim Zidan',
      imageUrl: 'https://placekitten.com/218/218',
    },
    {
      id: '20',
      name: 'Zahra Moussa',
      imageUrl: 'https://placekitten.com/219/219',
    },
    {id: '5', name: 'Karim Abdel', imageUrl: 'https://placekitten.com/204/204'},
    {
      id: '6',
      name: 'Layla Farouk',
      imageUrl: 'https://placekitten.com/205/205',
    },
    {id: '7', name: 'Ahmed Fathi', imageUrl: 'https://placekitten.com/206/206'},
    {
      id: '8',
      name: 'Hana Al-Khouri',
      imageUrl: 'https://placekitten.com/207/207',
    },
    {
      id: '9',
      name: 'Bilal Kassim',
      imageUrl: 'https://placekitten.com/208/208',
    },
    {
      id: '10',
      name: 'Nadia El-Mansour',
      imageUrl: 'https://placekitten.com/209/209',
    },
    {id: '1', name: 'John Doe', imageUrl: 'https://placekitten.com/200/200'},
    {id: '2', name: 'Jane Smith', imageUrl: 'https://placekitten.com/201/201'},
    {
      id: '3',
      name: 'Alice Johnson',
      imageUrl: 'https://placekitten.com/202/202',
    },
    {
      id: '4',
      name: 'Bob Williams',
      imageUrl: 'https://placekitten.com/203/203',
    },
    {
      id: '5',
      name: 'Charlie Brown',
      imageUrl: 'https://placekitten.com/204/204',
    },
    {id: '6', name: 'David Jones', imageUrl: 'https://placekitten.com/205/205'},
    {id: '7', name: 'Eva Green', imageUrl: 'https://placekitten.com/206/206'},
    {id: '8', name: 'Frank White', imageUrl: 'https://placekitten.com/207/207'},
    {id: '9', name: 'Grace Hall', imageUrl: 'https://placekitten.com/208/208'},
    {id: '10', name: 'Hank Moody', imageUrl: 'https://placekitten.com/209/209'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.userContainer}
            onPress={() =>
              navigation.navigate(ROUTE_NAMES.CHAT_STACK.CHAT, {
                userId: item.id,
                userName: item.name,
                userImageUrl: item.imageUrl,
              })
            }>
            <Image source={{uri: item.imageUrl}} style={styles.profileImage} />
            <Text style={styles.userName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  userContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E9E9E9',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'Nunito-Bold',
  },
});

export default UserListScreen;
