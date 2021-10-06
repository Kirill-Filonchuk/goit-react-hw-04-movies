Критерии приема Создан репозиторий goit-react-hw-04-movies При сдаче домашней работы есть ссылки: на
исходные файлы и рабочие страницы каждого проекта на Netlify В состоянии компонентов хранится
минимально необходимый набор данных, остальное вычисляется При запуске кода задания, в консоли нету
ошибок и предупреждений Для каждого компонента есть отдельная папка с файлом React-компонента и
файлом стилей Для компонентов описаны propTypes, и где необходимо, defaultProps Все что компонент
ожидает в виде пропов, передается ему при вызове Имена компонентов понятные, описательные JS-код
чистый и понятный, используется Prettier Стилизация делается только SASS, CSS-модулями или Styled
Components. Можно использовать библиотеки компонентов. Задание «Кинопоиск» Создай базовую
маршрутизацию для приложения поиска и хранения фильмов. Превью рабочего приложения смотри по ссылке.

API themoviedb.org Для бекенда используй themoviedb.org API. Необходимо зарегистриваться (можно
ввести произвольные данные) и получить API-ключ. В этой работе будут использоваться следующие
ендпоинты.

https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на
сегодня для создания коллекции на главной странице.
https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на
странице фильмов. https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной
информации о фильме для страницы кинофильма.
https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе
для страницы кинофильма. https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос
обзоров для страницы кинофильма. Ссылка на документацию

Маршруты В приложении должны быть следующие маршруты. Если пользователь зашел по несуществующему
маршруту, его необходимо перенаправлять на домашнюю страницу.

'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов. '/movies' -
компонент <MoviesPage>, страница поиска фильмов по ключевому слову. '/movies/:movieId' - компонент
<MovieDetailsPage>, страница с детальной информацией о кинофильме. /movies/:movieId/cast - компонент
<Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице
<MovieDetailsPage>. Code Splitting (разделение кода) Добавь асинхронную загрузку JS-кода для
маршрутов приложения используя React.lazy() и Suspense.

    <li key={1}>
          <Link to={{pathname:`${match.url}/cast`}}>Cast</Link>
        </li>
        <li key={11}>
          <Link to={{ pathname: `${match.url}/reviews` }}>Reviews</Link>
        </li>
      </ul>
      {/* <Cast id={movieId} /> */}
      <hr />
      {/* <Route path={`${match.url}/:reviews`}> */}
      <Switch>
        {/* <Route exact path="/cast"  component={<Reviews id={match.params.movieId} />} /> */}
        <Route path={match.path + "/cast"}>
          <Reviews id={movieId} />
        </Route>
        {/* <Route exact path={match.path + "/reviews"} component={<Cast id={match.path+"/reviews"} />} /> */}
         <Route path={match.path + "/reviews"}>
        <Cast id={movieId} />
        </Route>
      </Switch>
