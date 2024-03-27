import { useState } from 'react';
import axios from "axios";
import ImageList from './ImageList';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [translatedQuery, setTranslatedQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  // テキストを翻訳する関数
  const handleTranslate = async () => {
    try {
      const response = await axios.post('https://api-free.deepl.com/v2/translate', {
        auth_key: import.meta.env.VITE_DEEPL_API_KEY,
        text: query,
        target_lang: 'EN', // 英語に翻訳
      });

      setTranslatedQuery(response.data.translations[0].text);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  // レシピを検索する関数
  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${translatedQuery}&app_id=${import.meta.env.VITE_EDAMAM_API_ID}&app_key=${import.meta.env.VITE_EDAMAM_API_KEY}`);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Japanese text"
      />
      <button onClick={handleTranslate}>Translate</button>
      <button onClick={handleSearch}>Search Recipes</button>

      <h2>Translated Query: {translatedQuery}</h2>
      <ImageList recipes={recipes} />
    </div>
  );
};

export default App;