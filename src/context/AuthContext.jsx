import { useEffect, useState, createContext, useContext } from "react";

// Starts Global Container so every component can access
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Creates our User and Loading states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Runs One time when the app loads, checking to see if there is already someone logged in.
  // IF there is, we restore there session!
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      console.log("Restoring session for ", storedUser);
    }

    setLoading(false);
  }, []);

// Starts creation of fake user, saving them to the local storage and updating the globalstate
  const login = (email, password) => {
    const fakeUser = {
      email,
      name: "Admin",
    };

    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
    console.log("Logging in under user: ", fakeUser);
  };

// Deletes the session from all states and instantly logs out the user
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    console.log("Logging out User, expect null: ", user);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// THIS IS THE MAGIC! This allows us to access user, login, logout by calling useAuth  
// EX: const { user, login, logout } = useAuth();

export const useAuth = () => {
  return useContext(AuthContext);
};
