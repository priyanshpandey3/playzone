import http from "../http-common";

class RoleService {
    getAll() {
      return http.get("/getAllRole");
    }
}

export default new RoleService();