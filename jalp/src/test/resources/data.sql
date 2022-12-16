INSERT INTO users(username, enabled, password) VALUES ('admin', true, '{bcrypt}$2a$10$MfijVmidq73sKdVNthcchObA2WUg5tlkralABIqoLVx359AOcqda2');

INSERT INTO authorities(id, username, authority) VALUES ('0', 'admin', 'ROLE_ADMIN');
INSERT INTO authorities(id, username, authority) VALUES ('1', 'admin', 'ROLE_USER');