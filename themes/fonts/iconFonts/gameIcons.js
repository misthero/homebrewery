/* eslint-disable max-lines */

// This is a subset of the library of icons at game-icons.net -- the subset is from RPG-Awesome repo

// The entire font can be downloaded as svg from game-icons.net,
// and then loaded through icomoon.io to create webfont from svg,
// and the css font file can be turned into below list using regex
// regex used: \.([^:-]*)-([^:]*)(.*)
// substitution: "$1$2" : "$1-$2",

const gameIcons = {
	'gi_zigzag_leaf'              : 'gi zigzag-leaf',
	'gi_zebra_shield'             : 'gi zebra-shield',
	'gi_x_mark'                   : 'gi x-mark',
	'gi_wyvern'                   : 'gi wyvern',
	'gi_wrench'                   : 'gi wrench',
	'gi_wooden_sign'              : 'gi wooden-sign',
	'gi_wolf_howl'                : 'gi wolf-howl',
	'gi_wolf_head'                : 'gi wolf-head',
	'gi_wireless_signal'          : 'gi wireless-signal',
	'gi_wifi'                     : 'gi wifi',
	'gi_water_drop'               : 'gi water-drop',
	'gi_virgo'                    : 'gi virgo',
	'gi_vine_whip'                : 'gi vine-whip',
	'gi_vial'                     : 'gi vial',
	'gi_vest'                     : 'gi vest',
	'gi_venomous_snake'           : 'gi venomous-snake',
	'gi_vase'                     : 'gi vase',
	'gi_unplugged'                : 'gi unplugged',
	'gi_underhand'                : 'gi underhand',
	'gi_uncertainty'              : 'gi uncertainty',
	'gi_two_hearts'               : 'gi two-hearts',
	'gi_two_dragons'              : 'gi two-dragons',
	'gi_turd'                     : 'gi turd',
	'gi_trophy'                   : 'gi trophy',
	'gi_triforce'                 : 'gi triforce',
	'gi_trident'                  : 'gi trident',
	'gi_trefoil_lily'             : 'gi trefoil-lily',
	'gi_trail'                    : 'gi trail',
	'gi_tower'                    : 'gi tower',
	'gi_torch'                    : 'gi torch',
	'gi_tooth'                    : 'gi tooth',
	'gi_tombstone'                : 'gi tombstone',
	'gi_toast'                    : 'gi toast',
	'gi_tic_tac_toe'              : 'gi tic-tac-toe',
	'gi_three_keys'               : 'gi three-keys',
	'gi_thorny_vine'              : 'gi thorny-vine',
	'gi_thorn_arrow'              : 'gi thorn-arrow',
	'gi_tesla'                    : 'gi tesla',
	'gi_tentacle'                 : 'gi tentacle',
	'gi_telescope'                : 'gi telescope',
	'gi_taurus'                   : 'gi taurus',
	'gi_targeted'                 : 'gi targeted',
	'gi_target_laser'             : 'gi target-laser',
	'gi_target_arrows'            : 'gi target-arrows',
	'gi_syringe'                  : 'gi syringe',
	'gi_surveillance_camera'      : 'gi surveillance-camera',
	'gi_supersonic_arrow'         : 'gi supersonic-arrow',
	'gi_super_mushroom'           : 'gi super-mushroom',
	'gi_sunbeams'                 : 'gi sunbeams',
	'gi_sun'                      : 'gi sun',
	'gi_sun_symbol'               : 'gi sun-symbol',
	'gi_suits'                    : 'gi suits',
	'gi_suckered_tentacle'        : 'gi suckered-tentacle',
	'gi_stopwatch'                : 'gi stopwatch',
	'gi_sprout'                   : 'gi sprout',
	'gi_sprout_emblem'            : 'gi sprout-emblem',
	'gi_spray_can'                : 'gi spray-can',
	'gi_splash'                   : 'gi splash',
	'gi_spiral_shell'             : 'gi spiral-shell',
	'gi_spinning_sword'           : 'gi spinning-sword',
	'gi_spiked_tentacle'          : 'gi spiked-tentacle',
	'gi_spiked_mace'              : 'gi spiked-mace',
	'gi_spikeball'                : 'gi spikeball',
	'gi_spider_face'              : 'gi spider-face',
	'gi_speech_bubbles'           : 'gi speech-bubbles',
	'gi_speech_bubble'            : 'gi speech-bubble',
	'gi_spear_head'               : 'gi spear-head',
	'gi_spawn_node'               : 'gi spawn-node',
	'gi_spades'                   : 'gi spades',
	'gi_spades_card'              : 'gi spades-card',
	'gi_soccer_ball'              : 'gi soccer-ball',
	'gi_snowflake'                : 'gi snowflake',
	'gi_snorkel'                  : 'gi snorkel',
	'gi_snake'                    : 'gi snake',
	'gi_snail'                    : 'gi snail',
	'gi_small_fire'               : 'gi small-fire',
	'gi_slash_ring'               : 'gi slash-ring',
	'gi_skull'                    : 'gi skull',
	'gi_skull_trophy'             : 'gi skull-trophy',
	'gi_site'                     : 'gi site',
	'gi_sideswipe'                : 'gi sideswipe',
	'gi_sickle'                   : 'gi sickle',
	'gi_shuriken'                 : 'gi shuriken',
	'gi_shovel'                   : 'gi shovel',
	'gi_shotgun_shell'            : 'gi shotgun-shell',
	'gi_shot_through_the_heart'   : 'gi shot-through-the-heart',
	'gi_shoe_prints'              : 'gi shoe-prints',
	'gi_ship_emblem'              : 'gi ship-emblem',
	'gi_shield'                   : 'gi shield',
	'gi_sheriff'                  : 'gi sheriff',
	'gi_sheep'                    : 'gi sheep',
	'gi_shark'                    : 'gi shark',
	'gi_seagull'                  : 'gi seagull',
	'gi_sea_serpent'              : 'gi sea-serpent',
	'gi_scythe'                   : 'gi scythe',
	'gi_scroll_unfurled'          : 'gi scroll-unfurled',
	'gi_scorpio'                  : 'gi scorpio',
	'gi_save'                     : 'gi save',
	'gi_satellite'                : 'gi satellite',
	'gi_sapphire'                 : 'gi sapphire',
	'gi_sagittarius'              : 'gi sagittarius',
	'gi_rune_stone'               : 'gi rune-stone',
	'gi_rss'                      : 'gi rss',
	'gi_round_shield'             : 'gi round-shield',
	'gi_round_bottom_flask'       : 'gi round-bottom-flask',
	'gi_robot_arm'                : 'gi robot-arm',
	'gi_roast_chicken'            : 'gi roast-chicken',
	'gi_ringing_bell'             : 'gi ringing-bell',
	'gi_rifle'                    : 'gi rifle',
	'gi_revolver'                 : 'gi revolver',
	'gi_reverse'                  : 'gi reverse',
	'gi_repair'                   : 'gi repair',
	'gi_relic_blade'              : 'gi relic-blade',
	'gi_regeneration'             : 'gi regeneration',
	'gi_recycle'                  : 'gi recycle',
	'gi_reactor'                  : 'gi reactor',
	'gi_raven'                    : 'gi raven',
	'gi_radioactive'              : 'gi radioactive',
	'gi_radial_balance'           : 'gi radial-balance',
	'gi_radar_dish'               : 'gi radar-dish',
	'gi_rabbit'                   : 'gi rabbit',
	'gi_quill_ink'                : 'gi quill-ink',
	'gi_queen_crown'              : 'gi queen-crown',
	'gi_pyramids'                 : 'gi pyramids',
	'gi_potion'                   : 'gi potion',
	'gi_poison_cloud'             : 'gi poison-cloud',
	'gi_podium'                   : 'gi podium',
	'gi_player'                   : 'gi player',
	'gi_player_thunder_struck'    : 'gi player-thunder-struck',
	'gi_player_teleport'          : 'gi player-teleport',
	'gi_player_shot'              : 'gi player-shot',
	'gi_player_pyromaniac'        : 'gi player-pyromaniac',
	'gi_player_pain'              : 'gi player-pain',
	'gi_player_lift'              : 'gi player-lift',
	'gi_player_king'              : 'gi player-king',
	'gi_player_dodge'             : 'gi player-dodge',
	'gi_player_despair'           : 'gi player-despair',
	'gi_plain_dagger'             : 'gi plain-dagger',
	'gi_pisces'                   : 'gi pisces',
	'gi_ping_pong'                : 'gi ping-pong',
	'gi_pine_tree'                : 'gi pine-tree',
	'gi_pills'                    : 'gi pills',
	'gi_pill'                     : 'gi pill',
	'gi_perspective_dice_three'   : 'gi perspective-dice-three',
	'gi_perspective_dice_six'     : 'gi perspective-dice-six',
	'gi_perspective_dice_six_two' : 'gi perspective-dice-six-two',
	'gi_perspective_dice_random'  : 'gi perspective-dice-random',
	'gi_perspective_dice_one'     : 'gi perspective-dice-one',
	'gi_perspective_dice_four'    : 'gi perspective-dice-four',
	'gi_perspective_dice_five'    : 'gi perspective-dice-five',
	'gi_pawprint'                 : 'gi pawprint',
	'gi_pawn'                     : 'gi pawn',
	'gi_palm_tree'                : 'gi palm-tree',
	'gi_overmind'                 : 'gi overmind',
	'gi_overhead'                 : 'gi overhead',
	'gi_ophiuchus'                : 'gi ophiuchus',
	'gi_on_target'                : 'gi on-target',
	'gi_omega'                    : 'gi omega',
	'gi_octopus'                  : 'gi octopus',
	'gi_ocean_emblem'             : 'gi ocean-emblem',
	'gi_ocarina'                  : 'gi ocarina',
	'gi_nuclear'                  : 'gi nuclear',
	'gi_noose'                    : 'gi noose',
	'gi_nodular'                  : 'gi nodular',
	'gi_nails'                    : 'gi nails',
	'gi_musket'                   : 'gi musket',
	'gi_muscle_up'                : 'gi muscle-up',
	'gi_muscle_fat'               : 'gi muscle-fat',
	'gi_mp5'                      : 'gi mp5',
	'gi_moon_sun'                 : 'gi moon-sun',
	'gi_montains'                 : 'gi montains',
	'gi_monster_skull'            : 'gi monster-skull',
	'gi_mirror'                   : 'gi mirror',
	'gi_mining_diamonds'          : 'gi mining-diamonds',
	'gi_mine_wagon'               : 'gi mine-wagon',
	'gi_microphone'               : 'gi microphone',
	'gi_metal_gate'               : 'gi metal-gate',
	'gi_medical_pack'             : 'gi medical-pack',
	'gi_meat'                     : 'gi meat',
	'gi_meat_hook'                : 'gi meat-hook',
	'gi_match'                    : 'gi match',
	'gi_mass_driver'              : 'gi mass-driver',
	'gi_magnet'                   : 'gi magnet',
	'gi_maggot'                   : 'gi maggot',
	'gi_love_howl'                : 'gi love-howl',
	'gi_locked_fortress'          : 'gi locked-fortress',
	'gi_load'                     : 'gi load',
	'gi_lit_candelabra'           : 'gi lit-candelabra',
	'gi_lion'                     : 'gi lion',
	'gi_lightning'                : 'gi lightning',
	'gi_lightning_trio'           : 'gi lightning-trio',
	'gi_lightning_sword'          : 'gi lightning-sword',
	'gi_lightning_storm'          : 'gi lightning-storm',
	'gi_lightning_bolt'           : 'gi lightning-bolt',
	'gi_lighthouse'               : 'gi lighthouse',
	'gi_light_bulb'               : 'gi light-bulb',
	'gi_libra'                    : 'gi libra',
	'gi_lever'                    : 'gi lever',
	'gi_level_two'                : 'gi level-two',
	'gi_level_two_advanced'       : 'gi level-two-advanced',
	'gi_level_three'              : 'gi level-three',
	'gi_level_three_advanced'     : 'gi level-three-advanced',
	'gi_level_four'               : 'gi level-four',
	'gi_level_four_advanced'      : 'gi level-four-advanced',
	'gi_leo'                      : 'gi leo',
	'gi_leaf'                     : 'gi leaf',
	'gi_lava'                     : 'gi lava',
	'gi_laser_site'               : 'gi laser-site',
	'gi_laser_blast'              : 'gi laser-blast',
	'gi_large_hammer'             : 'gi large-hammer',
	'gi_lantern_flame'            : 'gi lantern-flame',
	'gi_kunai'                    : 'gi kunai',
	'gi_knight_helmet'            : 'gi knight-helmet',
	'gi_knife'                    : 'gi knife',
	'gi_knife_fork'               : 'gi knife-fork',
	'gi_kitchen_knives'           : 'gi kitchen-knives',
	'gi_key'                      : 'gi key',
	'gi_key_basic'                : 'gi key-basic',
	'gi_kettlebell'               : 'gi kettlebell',
	'gi_kaleidoscope'             : 'gi kaleidoscope',
	'gi_jigsaw_piece'             : 'gi jigsaw-piece',
	'gi_jetpack'                  : 'gi jetpack',
	'gi_interdiction'             : 'gi interdiction',
	'gi_insect_jaws'              : 'gi insect-jaws',
	'gi_incense'                  : 'gi incense',
	'gi_implosion'                : 'gi implosion',
	'gi_ice_cube'                 : 'gi ice-cube',
	'gi_hydra'                    : 'gi hydra',
	'gi_hydra_shot'               : 'gi hydra-shot',
	'gi_hourglass'                : 'gi hourglass',
	'gi_hot_surface'              : 'gi hot-surface',
	'gi_hospital_cross'           : 'gi hospital-cross',
	'gi_horseshoe'                : 'gi horseshoe',
	'gi_horns'                    : 'gi horns',
	'gi_horn_call'                : 'gi horn-call',
	'gi_hood'                     : 'gi hood',
	'gi_honeycomb'                : 'gi honeycomb',
	'gi_hole_ladder'              : 'gi hole-ladder',
	'gi_hive_emblem'              : 'gi hive-emblem',
	'gi_help'                     : 'gi help',
	'gi_helmet'                   : 'gi helmet',
	'gi_heavy_shield'             : 'gi heavy-shield',
	'gi_heavy_fall'               : 'gi heavy-fall',
	'gi_heat_haze'                : 'gi heat-haze',
	'gi_hearts'                   : 'gi hearts',
	'gi_hearts_card'              : 'gi hearts-card',
	'gi_heartburn'                : 'gi heartburn',
	'gi_heart_tower'              : 'gi heart-tower',
	'gi_heart_bottle'             : 'gi heart-bottle',
	'gi_health'                   : 'gi health',
	'gi_health_increase'          : 'gi health-increase',
	'gi_health_decrease'          : 'gi health-decrease',
	'gi_harpoon_trident'          : 'gi harpoon-trident',
	'gi_hand'                     : 'gi hand',
	'gi_hand_saw'                 : 'gi hand-saw',
	'gi_hand_emblem'              : 'gi hand-emblem',
	'gi_hammer'                   : 'gi hammer',
	'gi_hammer_drop'              : 'gi hammer-drop',
	'gi_halberd'                  : 'gi halberd',
	'gi_guillotine'               : 'gi guillotine',
	'gi_guarded_tower'            : 'gi guarded-tower',
	'gi_groundbreaker'            : 'gi groundbreaker',
	'gi_grenade'                  : 'gi grenade',
	'gi_grass'                    : 'gi grass',
	'gi_grass_patch'              : 'gi grass-patch',
	'gi_grappling_hook'           : 'gi grappling-hook',
	'gi_gold_bar'                 : 'gi gold-bar',
	'gi_gloop'                    : 'gi gloop',
	'gi_glass_heart'              : 'gi glass-heart',
	'gi_gemini'                   : 'gi gemini',
	'gi_gem'                      : 'gi gem',
	'gi_gem_pendant'              : 'gi gem-pendant',
	'gi_gecko'                    : 'gi gecko',
	'gi_gears'                    : 'gi gears',
	'gi_gear_heart'               : 'gi gear-heart',
	'gi_gear_hammer'              : 'gi gear-hammer',
	'gi_gavel'                    : 'gi gavel',
	'gi_gamepad_cross'            : 'gi gamepad-cross',
	'gi_frozen_arrow'             : 'gi frozen-arrow',
	'gi_frostfire'                : 'gi frostfire',
	'gi_frost_emblem'             : 'gi frost-emblem',
	'gi_fox'                      : 'gi fox',
	'gi_forward'                  : 'gi forward',
	'gi_forging'                  : 'gi forging',
	'gi_footprint'                : 'gi footprint',
	'gi_food_chain'               : 'gi food-chain',
	'gi_focused_lightning'        : 'gi focused-lightning',
	'gi_fluffy_swirl'             : 'gi fluffy-swirl',
	'gi_flowers'                  : 'gi flowers',
	'gi_flower'                   : 'gi flower',
	'gi_flat_hammer'              : 'gi flat-hammer',
	'gi_flask'                    : 'gi flask',
	'gi_flaming_trident'          : 'gi flaming-trident',
	'gi_flaming_claw'             : 'gi flaming-claw',
	'gi_flaming_arrow'            : 'gi flaming-arrow',
	'gi_flame_symbol'             : 'gi flame-symbol',
	'gi_fizzing_flask'            : 'gi fizzing-flask',
	'gi_fish'                     : 'gi fish',
	'gi_fireball_sword'           : 'gi fireball-sword',
	'gi_fire'                     : 'gi fire',
	'gi_fire_symbol'              : 'gi fire-symbol',
	'gi_fire_shield'              : 'gi fire-shield',
	'gi_fire_ring'                : 'gi fire-ring',
	'gi_fire_breath'              : 'gi fire-breath',
	'gi_fire_bomb'                : 'gi fire-bomb',
	'gi_fedora'                   : 'gi fedora',
	'gi_feathered_wing'           : 'gi feathered-wing',
	'gi_feather_wing'             : 'gi feather-wing',
	'gi_fast_ship'                : 'gi fast-ship',
	'gi_falling'                  : 'gi falling',
	'gi_fall_down'                : 'gi fall-down',
	'gi_fairy'                    : 'gi fairy',
	'gi_fairy_wand'               : 'gi fairy-wand',
	'gi_eyeball'                  : 'gi eyeball',
	'gi_eye_shield'               : 'gi eye-shield',
	'gi_eye_monster'              : 'gi eye-monster',
	'gi_explosive_materials'      : 'gi explosive-materials',
	'gi_explosion'                : 'gi explosion',
	'gi_energise'                 : 'gi energise',
	'gi_emerald'                  : 'gi emerald',
	'gi_eggplant'                 : 'gi eggplant',
	'gi_egg'                      : 'gi egg',
	'gi_egg_pod'                  : 'gi egg-pod',
	'gi_duel'                     : 'gi duel',
	'gi_droplets'                 : 'gi droplets',
	'gi_droplet'                  : 'gi droplet',
	'gi_droplet_splash'           : 'gi droplet-splash',
	'gi_dripping_sword'           : 'gi dripping-sword',
	'gi_dripping_knife'           : 'gi dripping-knife',
	'gi_dripping_blade'           : 'gi dripping-blade',
	'gi_drill'                    : 'gi drill',
	'gi_dragonfly'                : 'gi dragonfly',
	'gi_dragon'                   : 'gi dragon',
	'gi_dragon_wing'              : 'gi dragon-wing',
	'gi_dragon_breath'            : 'gi dragon-breath',
	'gi_doubled'                  : 'gi doubled',
	'gi_double_team'              : 'gi double-team',
	'gi_diving_dagger'            : 'gi diving-dagger',
	'gi_divert'                   : 'gi divert',
	'gi_dinosaur'                 : 'gi dinosaur',
	'gi_dice_two'                 : 'gi dice-two',
	'gi_dice_three'               : 'gi dice-three',
	'gi_dice_six'                 : 'gi dice-six',
	'gi_dice_one'                 : 'gi dice-one',
	'gi_dice_four'                : 'gi dice-four',
	'gi_dice_five'                : 'gi dice-five',
	'gi_diamonds'                 : 'gi diamonds',
	'gi_diamonds_card'            : 'gi diamonds-card',
	'gi_diamond'                  : 'gi diamond',
	'gi_desert_skull'             : 'gi desert-skull',
	'gi_dervish_swords'           : 'gi dervish-swords',
	'gi_demolish'                 : 'gi demolish',
	'gi_defibrillate'             : 'gi defibrillate',
	'gi_decapitation'             : 'gi decapitation',
	'gi_death_skull'              : 'gi death-skull',
	'gi_dead_tree'                : 'gi dead-tree',
	'gi_daisy'                    : 'gi daisy',
	'gi_daggers'                  : 'gi daggers',
	'gi_cycle'                    : 'gi cycle',
	'gi_cut_palm'                 : 'gi cut-palm',
	'gi_cubes'                    : 'gi cubes',
	'gi_crystals'                 : 'gi crystals',
	'gi_crystal_wand'             : 'gi crystal-wand',
	'gi_crystal_cluster'          : 'gi crystal-cluster',
	'gi_crystal_ball'             : 'gi crystal-ball',
	'gi_crush'                    : 'gi crush',
	'gi_crowned_heart'            : 'gi crowned-heart',
	'gi_crown'                    : 'gi crown',
	'gi_crown_of_thorns'          : 'gi crown-of-thorns',
	'gi_crossed_swords'           : 'gi crossed-swords',
	'gi_crossed_sabres'           : 'gi crossed-sabres',
	'gi_crossed_pistols'          : 'gi crossed-pistols',
	'gi_crossed_bones'            : 'gi crossed-bones',
	'gi_crossed_axes'             : 'gi crossed-axes',
	'gi_crossbow'                 : 'gi crossbow',
	'gi_croc_sword'               : 'gi croc-sword',
	'gi_cracked_shield'           : 'gi cracked-shield',
	'gi_cracked_helm'             : 'gi cracked-helm',
	'gi_crab_claw'                : 'gi crab-claw',
	'gi_corked_tube'              : 'gi corked-tube',
	'gi_compass'                  : 'gi compass',
	'gi_cold_heart'               : 'gi cold-heart',
	'gi_cog'                      : 'gi cog',
	'gi_cog_wheel'                : 'gi cog-wheel',
	'gi_coffee_mug'               : 'gi coffee-mug',
	'gi_cluster_bomb'             : 'gi cluster-bomb',
	'gi_clovers'                  : 'gi clovers',
	'gi_clovers_card'             : 'gi clovers-card',
	'gi_clover'                   : 'gi clover',
	'gi_clockwork'                : 'gi clockwork',
	'gi_cloak_and_dagger'         : 'gi cloak-and-dagger',
	'gi_circular_shield'          : 'gi circular-shield',
	'gi_circular_saw'             : 'gi circular-saw',
	'gi_circle_of_circles'        : 'gi circle-of-circles',
	'gi_chicken_leg'              : 'gi chicken-leg',
	'gi_chessboard'               : 'gi chessboard',
	'gi_chemical_arrow'           : 'gi chemical-arrow',
	'gi_cheese'                   : 'gi cheese',
	'gi_chain'                    : 'gi chain',
	'gi_cat'                      : 'gi cat',
	'gi_castle_flag'              : 'gi castle-flag',
	'gi_castle_emblem'            : 'gi castle-emblem',
	'gi_carrot'                   : 'gi carrot',
	'gi_capricorn'                : 'gi capricorn',
	'gi_capitol'                  : 'gi capitol',
	'gi_cannon_shot'              : 'gi cannon-shot',
	'gi_candle'                   : 'gi candle',
	'gi_candle_fire'              : 'gi candle-fire',
	'gi_cancer'                   : 'gi cancer',
	'gi_cancel'                   : 'gi cancel',
	'gi_campfire'                 : 'gi campfire',
	'gi_butterfly'                : 'gi butterfly',
	'gi_burst_blob'               : 'gi burst-blob',
	'gi_burning_meteor'           : 'gi burning-meteor',
	'gi_burning_eye'              : 'gi burning-eye',
	'gi_burning_embers'           : 'gi burning-embers',
	'gi_burning_book'             : 'gi burning-book',
	'gi_bullets'                  : 'gi bullets',
	'gi_bubbling_potion'          : 'gi bubbling-potion',
	'gi_broken_skull'             : 'gi broken-skull',
	'gi_broken_shield'            : 'gi broken-shield',
	'gi_broken_heart'             : 'gi broken-heart',
	'gi_broken_bottle'            : 'gi broken-bottle',
	'gi_broken_bone'              : 'gi broken-bone',
	'gi_broadsword'               : 'gi broadsword',
	'gi_broadhead_arrow'          : 'gi broadhead-arrow',
	'gi_bridge'                   : 'gi bridge',
	'gi_brandy_bottle'            : 'gi brandy-bottle',
	'gi_brain_freeze'             : 'gi brain-freeze',
	'gi_bowling_pin'              : 'gi bowling-pin',
	'gi_bowie_knife'              : 'gi bowie-knife',
	'gi_bottom_right'             : 'gi bottom-right',
	'gi_bottled_bolt'             : 'gi bottled-bolt',
	'gi_bottle_vapors'            : 'gi bottle-vapors',
	'gi_boot_stomp'               : 'gi boot-stomp',
	'gi_boomerang'                : 'gi boomerang',
	'gi_book'                     : 'gi book',
	'gi_bone_knife'               : 'gi bone-knife',
	'gi_bone_bite'                : 'gi bone-bite',
	'gi_bombs'                    : 'gi bombs',
	'gi_bomb_explosion'           : 'gi bomb-explosion',
	'gi_bolt_shield'              : 'gi bolt-shield',
	'gi_bleeding_hearts'          : 'gi bleeding-hearts',
	'gi_bleeding_eye'             : 'gi bleeding-eye',
	'gi_blaster'                  : 'gi blaster',
	'gi_blast'                    : 'gi blast',
	'gi_blade_bite'               : 'gi blade-bite',
	'gi_bird_mask'                : 'gi bird-mask',
	'gi_bird_claw'                : 'gi bird-claw',
	'gi_biohazard'                : 'gi biohazard',
	'gi_bell'                     : 'gi bell',
	'gi_beetle'                   : 'gi beetle',
	'gi_beer'                     : 'gi beer',
	'gi_bear_trap'                : 'gi bear-trap',
	'gi_beam_wake'                : 'gi beam-wake',
	'gi_batwings'                 : 'gi batwings',
	'gi_battery_white'            : 'gi battery-white',
	'gi_battery_positive'         : 'gi battery-positive',
	'gi_battery_negative'         : 'gi battery-negative',
	'gi_battery_black'            : 'gi battery-black',
	'gi_battery_75'               : 'gi battery-75',
	'gi_battery_50'               : 'gi battery-50',
	'gi_battery_25'               : 'gi battery-25',
	'gi_battery_100'              : 'gi battery-100',
	'gi_battery_0'                : 'gi battery-0',
	'gi_batteries'                : 'gi batteries',
	'gi_battered_axe'             : 'gi battered-axe',
	'gi_bat_sword'                : 'gi bat-sword',
	'gi_barrier'                  : 'gi barrier',
	'gi_barbed_arrow'             : 'gi barbed-arrow',
	'gi_ball'                     : 'gi ball',
	'gi_axe'                      : 'gi axe',
	'gi_axe_swing'                : 'gi axe-swing',
	'gi_aware'                    : 'gi aware',
	'gi_aura'                     : 'gi aura',
	'gi_arson'                    : 'gi arson',
	'gi_arrow_flights'            : 'gi arrow-flights',
	'gi_arrow_cluster'            : 'gi arrow-cluster',
	'gi_aries'                    : 'gi aries',
	'gi_arena'                    : 'gi arena',
	'gi_archery_target'           : 'gi archery-target',
	'gi_archer'                   : 'gi archer',
	'gi_arcane_mask'              : 'gi arcane-mask',
	'gi_aquarius'                 : 'gi aquarius',
	'gi_apple'                    : 'gi apple',
	'gi_anvil'                    : 'gi anvil',
	'gi_ankh'                     : 'gi ankh',
	'gi_angel_wings'              : 'gi angel-wings',
	'gi_anchor'                   : 'gi anchor',
	'gi_ammo_bag'                 : 'gi ammo-bag',
	'gi_alligator_clip'           : 'gi alligator-clip',
	'gi_all_for_one'              : 'gi all-for-one',
	'gi_alien_fire'               : 'gi alien-fire',
	'gi_acorn'                    : 'gi acorn',
	'gi_acid'                     : 'gi acid'
};

module.exports = gameIcons;