import { useState, useEffect } from 'react';
import axios from '../../../axios-client';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('ACCESS_TOKEN'); // Ambil token dari local storage
        const response = await axios.get('/mardika', { // Lakukan request ke endpoint user
          headers: {
            Authorization: `Bearer ${token}` // Sertakan token sebagai Authorization header
          }
        });
        setUserData(response.data); // Set data profil user ke state
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserData();
  }, []);

  console.log(userData.email)

  return (
    <div>
      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
          <h1>testing gais</h1>
        </div>
      )}
    </div>
  );
}

export default Profile;
