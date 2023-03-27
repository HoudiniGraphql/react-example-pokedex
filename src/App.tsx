import { useQueryHandle, graphql } from '$houdini'

function App() {
  const { data } = useQueryHandle(graphql(`
    query Info($id: Int = 1) {
      species(id: $id) {
        id
        name
        flavor_text
        favorite

        evolution_chain {
          ...SpeciesPreview
        }

        moves(first: 1) @paginate {
          edges {
            node {
              ...MoveDisplay
            }
          }
        }

        ...SpriteInfo
      }
      favorites @list(name: "FavoriteSpecies") {
        ...FavoritePreview
      }
    }
  `))

  return <div>hello</div>;

}

export default App;
