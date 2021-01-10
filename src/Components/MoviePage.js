/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import Reviews from './Reviews';
import { fetchSpecificMovieData } from '../util/fetchData';

const outerStyle = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  main {
    width: 900px;
    min-height: 400px;
    display: flex;
    align-items: center;
    margin-top: 200px;
    img {
      height: 400px;
      width: 266px;
    }
    .textContainer {
      padding: 25px 40px;
      color: #e6f7ff;
      h1 {
        text-transform: uppercase;
        margin: 10px 0 0 0;
        padding: 0;
        font-size: 300%;
        letter-spacing: 3px;
        font-weight: lighter;
      }
      .Rating {
        display: flex;
        align-items: center;
        p {
          margin: 0 5px 0 0;
          font-size: 80%;
          opacity: 90%;
          letter-spacing: 2px;
        }
      }

      section {
        h2 {
          margin: 30px 0 10px 0;
          padding: 0;
          font-size: 200%;
          letter-spacing: 3px;
          font-weight: lighter;
        }
        .overview {
          font-size: 80%;
          line-height: 150%;
          margin-bottom: 30px;
        }

        h5 {
          margin: 10px 0;
          p {
            font-size: 80%;
            line-height: 150%;
            width: 80%;
            opacity: 90%;
            display: inline;
            font-weight: normal;
            :after {
              content: ' / ';
            }
            :last-child {
              :after {
                content: none;
              }
            }
          }
        }
      }
    }
  }
`;

export default function MoviePage({ match }) {
  const {
    params: { movieId },
  } = match;
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    fetchSpecificMovieData(movieId, setMovieData);
  }, [movieId]);
  if (!movieData) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <div css={outerStyle}>
        <main>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieData['poster_path']}`}
            alt={`movieposter of   ${movieData['original_title']}`}
          />
          <div className="textContainer">
            <header>
              <h1>
                {movieData.title} ({movieData['release_date'].slice(0, 4)})
              </h1>
            </header>
            <div className="Rating">
              <p>Rating:</p>
              <StarRatings
                numberOfStars={5}
                rating={movieData.vote_average / 2}
                starRatedColor="#ffa534"
                starEmptyColor="#e6f7ff"
                starDimension="13px"
                starSpacing="2px"
              />
            </div>
            <section>
              <h2>Overview</h2>
              <p className="overview">{movieData.overview}</p>
              <h5>
                Genre:{' '}
                {movieData.genres.map((genre, index) => {
                  return <p key={index}>{genre.name}</p>;
                })}
              </h5>
              <h5>
                Runtime: <p>{movieData.runtime} minutes</p>
              </h5>
            </section>
          </div>
        </main>
        <Reviews movieId={movieId} />
        <Link to="/">Back to homepage</Link>
      </div>
      )
    </div>
  );
}
