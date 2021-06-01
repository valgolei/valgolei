// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`1000100007030303030303030303030303030302080000000101000000010101010101060101010000000001010101010101010601010000010100000101010101010106010100010101010000010101010101060101000000000101000000000001010601010100010101010101010100010106010101000101010101010000000101060101010000000001010000010101010601010101010100010100010101010106010101000001000101000101010101060101010001010001010000000101010601010100000000010101010000000006010101010101010100000001010100060000000101010101000100010101000609000000000000000005000000000004`, img`
2 2 2 2 2 2 2 2 2 2 . . . . . . 
. . . . 2 2 . . . 2 . . . . . . 
2 2 2 . . . . 2 2 2 . . . . . . 
. 2 . . 2 2 . . 2 2 . . . . . . 
. 2 . 2 2 2 2 . . 2 2 2 2 2 . . 
. 2 . . . . 2 2 . . . . . 2 . . 
. 2 2 . 2 2 2 2 2 2 2 2 . 2 . . 
. . 2 . 2 2 2 2 2 2 . . . 2 . . 
. . 2 . . . . 2 2 . . 2 2 2 . . 
. . 2 2 2 2 . 2 2 . 2 2 . . . . 
. . 2 . . 2 . 2 2 . 2 2 2 . . . 
. . 2 . 2 2 . 2 2 . . . 2 2 2 . 
. . 2 . . . . 2 2 2 2 . . . . 2 
2 2 2 2 2 2 2 2 . . . 2 2 2 . 2 
. . . 2 2 2 2 2 . 2 . 2 2 2 . 2 
. . . . . . . . . 2 . . . . . 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.stairEast,sprites.dungeon.stairLarge], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
