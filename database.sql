CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    age INTEGER,
    is_VC BOOLEAN DEFAULT FALSE,
    password VARCHAR(255)
)

CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    user_id INTEGER,
    CONSTRAINT fk_user 
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
)

CREATE TABLE interests(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    user_id INTEGER,
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
);
