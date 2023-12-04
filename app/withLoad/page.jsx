// просто для задержки загрузки страницы
export const waiting = async () => {
  const promise = new Promise((res, reject) => {
    setTimeout(() => res("good"), 3000);
  });
  const data = await promise;
  return data;
};

export default async function Page() {
  const data = await waiting();
  return (
    <>
      <h1>Page with loading</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cum
        placeat velit voluptas. Sint quas ipsum quos dicta possimus eveniet et
        facere deserunt ratione quo consequuntur dolorem, porro unde inventore
        eaque quisquam atque architecto, eos, blanditiis illo soluta dolores
        molestias. Maxime ut nobis, tempora vero, dolorem error numquam odit
        distinctio, velit in porro dolores aperiam mollitia culpa magni sequi
        natus ad deserunt ipsum sapiente? Laborum odit nulla vel magni
        repudiandae deleniti in voluptate aperiam. In exercitationem tenetur
        culpa, a labore minima, eum commodi cumque aliquam eaque fugiat corporis
        maxime necessitatibus autem similique veniam eveniet minus laboriosam,
        totam nam? Asperiores, dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cum
        placeat velit voluptas. Sint quas ipsum quos dicta possimus eveniet et
        facere deserunt ratione quo consequuntur dolorem, porro unde inventore
        eaque quisquam atque architecto, eos, blanditiis illo soluta dolores
        molestias. Maxime ut nobis, tempora vero, dolorem error numquam odit
        distinctio, velit in porro dolores aperiam mollitia culpa magni sequi
        natus ad deserunt ipsum sapiente? Laborum odit nulla vel magni
        repudiandae deleniti in voluptate aperiam. In exercitationem tenetur
        culpa, a labore minima, eum commodi cumque aliquam eaque fugiat corporis
        maxime necessitatibus autem similique veniam eveniet minus laboriosam,
        totam nam? Asperiores, dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cum
        placeat velit voluptas. Sint quas ipsum quos dicta possimus eveniet et
        facere deserunt ratione quo consequuntur dolorem, porro unde inventore
        eaque quisquam atque architecto, eos, blanditiis illo soluta dolores
        molestias. Maxime ut nobis, tempora vero, dolorem error numquam odit
        distinctio, velit in porro dolores aperiam mollitia culpa magni sequi
        natus ad deserunt ipsum sapiente? Laborum odit nulla vel magni
        repudiandae deleniti in voluptate aperiam. In exercitationem tenetur
        culpa, a labore minima, eum commodi cumque aliquam eaque fugiat corporis
        maxime necessitatibus autem similique veniam eveniet minus laboriosam,
        totam nam? Asperiores, dolores.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cum
        placeat velit voluptas. Sint quas ipsum quos dicta possimus eveniet et
        facere deserunt ratione quo consequuntur dolorem, porro unde inventore
        eaque quisquam atque architecto, eos, blanditiis illo soluta dolores
        molestias. Maxime ut nobis, tempora vero, dolorem error numquam odit
        distinctio, velit in porro dolores aperiam mollitia culpa magni sequi
        natus ad deserunt ipsum sapiente? Laborum odit nulla vel magni
        repudiandae deleniti in voluptate aperiam. In exercitationem tenetur
        culpa, a labore minima, eum commodi cumque aliquam eaque fugiat corporis
        maxime necessitatibus autem similique veniam eveniet minus laboriosam,
        totam nam? Asperiores, dolores.
      </p>
    </>
  );
}
