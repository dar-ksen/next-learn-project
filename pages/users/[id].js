import MainContainer from "../../components/MainContainer";
import styles from '../../styles/user.module.scss'

const UserId = ({user}) => {

  return (
    <MainContainer title={ 'Пользователь' }>
      <div className={ styles.user }>
        <h1>Пользователь с id { user.id } </h1>
        <p>Имя пользователя { user.name } </p>
      </div>
    </MainContainer>
  );
};

export default UserId;

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  }
}