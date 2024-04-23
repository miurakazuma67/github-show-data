import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Username:', username, 'Password:', password);
        // ここで認証処理を行う
    };

    return (
        <Box sx={{ maxWidth: 300, mx: 'auto', mt: 5 }}>
            <Typography variant="h6" component="h1" gutterBottom>
                ログイン
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="ユーザー名"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <TextField
                    label="パスワード"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    ログイン
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;