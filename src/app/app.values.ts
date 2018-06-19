let url = 'https://serene-mesa-95818.herokuapp.com/';

const local = false;
if (local) {
  url = 'http://localhost:8080/';
}

export const domain = url;
export const server = domain + 'api/cic';
