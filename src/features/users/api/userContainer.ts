// src/features/users/api/userContainer.ts
import { UserService } from './UserService';

class Container {
  private userServiceInstance: UserService | null = null;

  getUserService(): UserService {
    if (!this.userServiceInstance) {
      this.userServiceInstance = new UserService();
    }
    return this.userServiceInstance;
  }
}

const container = new Container();
export default container;
