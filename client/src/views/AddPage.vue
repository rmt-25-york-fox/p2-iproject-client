<template>
  <div class="form">
    <div class="row text-center">
      <div class="col">
        <h2></h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <form>
          <div class="mb-3">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="titleNew" />
          </div>
          <div class="mb-3">
            <label for="synopsis" class="form-label">Synopsis</label>
            <textarea class="form-control" name="" id="synopsisNew" cols="30" rows="10"></textarea>
          </div>
          <div class="mb-3">
            <label for="trailerUrl" class="form-label">Trailer</label>
            <input type="text" class="form-control" id="trailerNew" />
          </div>
          <div class="mb-3">
            <label for="imgUrl" class="form-label">Poster</label>
            <input type="text" class="form-control" id="posterNew" />
          </div>
          <div class="mb-3">
            <label for="rating" class="form-label">Rating</label>
            <input type="number" class="form-control" id="ratingNew" />
          </div>
          <div class="mb-3">
            <label for="GenreId">Genre</label>
            <select class="form-control">
              <option></option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
