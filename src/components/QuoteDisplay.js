import React, { useState, useEffect } from 'react';

function QuoteDisplay() {
  const [quoteData, setQuoteData] = useState({
    quote: null,
    author: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const category = 'happiness';
    const apiKey = 'hgmR6sJjdWBlUEdQfdIhgISmu1DwpTYf7U8jqYUr';

    // Construct the API URL with the category
    const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setQuoteData({
            quote: data[0].quote,
            author: data[0].author,
            loading: false,
            error: null,
          });
        } else {
          throw new Error('No data found');
        }
      })
      .catch((err) => {
        setQuoteData({
          quote: null,
          author: null,
          loading: false,
          error: err.message,
        });
      });
  }, []);

  const {
    loading, error, quote, author,
  } = quoteData;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="quote-display">
      <h2>Quote of the Day</h2>
      <p className="quotes">{quote}</p>
      <p className="author">{author}</p>
    </div>
  );
}

export default QuoteDisplay;
