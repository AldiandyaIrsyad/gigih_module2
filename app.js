const express = require('express');
const app = express();
const playlistRoutes = require('./routes/PlaylistRoutes');


app.use(express.json());

app.use('/api/v1', playlistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
