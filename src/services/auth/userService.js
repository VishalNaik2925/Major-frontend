import initialUsers from '../../data/users.json';

const STORAGE_KEYS = {
  USERS: 'healthcare_users',
  SESSION: 'healthcare_session'
};

export const userService = {
  initializeUsers() {
    const existingUsers = localStorage.getItem(STORAGE_KEYS.USERS);
    if (!existingUsers) {
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(initialUsers.users));
    }
  },

  saveUsersData(users) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },

  getUsersData() {
    const users = localStorage.getItem(STORAGE_KEYS.USERS);
    return users ? JSON.parse(users) : [];
  },

  register(userData) {
    const users = this.getUsersData();
    
    // Check if user already exists
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      createdAt: new Date().toISOString()
    };

    // Save user and create session
    users.push(newUser);
    this.saveUsersData(users);
    
    // Create session immediately after registration
    this.createSession(newUser);
    
    return newUser;
  },

  login(email, password) {
    const users = this.getUsersData();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Create session
    this.createSession(user);
    
    return user;
  },

  createSession(user) {
    const session = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      createdAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
  },

  getCurrentUser() {
    const session = localStorage.getItem(STORAGE_KEYS.SESSION);
    if (!session) return null;
    
    const { user } = JSON.parse(session);
    return user;
  },

  logout() {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
  },

  initialize() {
    this.initializeUsers();
  }
}; 