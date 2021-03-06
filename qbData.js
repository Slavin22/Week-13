var qbData = [
{'quarterback': 'Alex Smith', 'team': 'KCC', 'home_away': '@', 'opponent': 'NYJ', 'adjPF': '20.5', 'adjPA': '21.2', 'Proj': '21.6'},
{'quarterback': 'Tom Brady', 'team': 'NEP', 'home_away': '@', 'opponent': 'BUF', 'adjPF': '22.3', 'adjPA': '14.7', 'Proj': '21.1'},
{'quarterback': 'Carson Wentz', 'team': 'PHI', 'home_away': '@', 'opponent': 'SEA', 'adjPF': '22.4', 'adjPA': '16.0', 'Proj': '20.8'},
{'quarterback': 'Kirk Cousins', 'team': 'WAS', 'home_away': '@', 'opponent': 'DAL', 'adjPF': '21.4', 'adjPA': '19.8', 'Proj': '20.6'},
{'quarterback': 'Philip Rivers', 'team': 'LAC', 'home_away': 'vs.', 'opponent': 'CLE', 'adjPF': '18.2', 'adjPA': '21.5', 'Proj': '20.2'},
{'quarterback': 'Cam Newton', 'team': 'CAR', 'home_away': '@', 'opponent': 'NOS', 'adjPF': '19.2', 'adjPA': '17.2', 'Proj': '20'},
{'quarterback': 'Russell Wilson', 'team': 'SEA', 'home_away': 'vs.', 'opponent': 'PHI', 'adjPF': '22.8', 'adjPA': '15.6', 'Proj': '19.6'},
{'quarterback': 'Marcus Mariota', 'team': 'TEN', 'home_away': 'vs.', 'opponent': 'HOU', 'adjPF': '16.7', 'adjPA': '22.0', 'Proj': '19.5'},
{'quarterback': 'Derek Carr', 'team': 'OAK', 'home_away': 'vs.', 'opponent': 'NYG', 'adjPF': '17.0', 'adjPA': '19.2', 'Proj': '18.8'},
{'quarterback': 'Tyrod Taylor', 'team': 'BUF', 'home_away': 'vs.', 'opponent': 'NEP', 'adjPF': '17.6', 'adjPA': '20.0', 'Proj': '18.4'},
{'quarterback': 'Case Keenum', 'team': 'MIN', 'home_away': '@', 'opponent': 'ATL', 'adjPF': '19.5', 'adjPA': '17.7', 'Proj': '18.4'},
{'quarterback': 'Drew Brees', 'team': 'NOS', 'home_away': 'vs.', 'opponent': 'CAR', 'adjPF': '19.1', 'adjPA': '16.6', 'Proj': '18.3'},
{'quarterback': 'Blake Bortles', 'team': 'JAC', 'home_away': 'vs.', 'opponent': 'IND', 'adjPF': '16.5', 'adjPA': '18.8', 'Proj': '18.2'},
{'quarterback': 'Matt Ryan', 'team': 'ATL', 'home_away': 'vs.', 'opponent': 'MIN', 'adjPF': '16.7', 'adjPA': '15.0', 'Proj': '18.1'},
{'quarterback': 'Jared Goff', 'team': 'LAR', 'home_away': '@', 'opponent': 'ARI', 'adjPF': '18.1', 'adjPA': '19.5', 'Proj': '18.1'},
{'quarterback': 'Ben Roethlisberger', 'team': 'PIT', 'home_away': '@', 'opponent': 'CIN', 'adjPF': '18.9', 'adjPA': '18.2', 'Proj': '18.0'},
{'quarterback': 'Jameis Winston', 'team': 'TBB', 'home_away': '@', 'opponent': 'GBP', 'adjPF': '17.2', 'adjPA': '19.7', 'Proj': '17.8'},
{'quarterback': 'Dak Prescott', 'team': 'DAL', 'home_away': 'vs.', 'opponent': 'WAS', 'adjPF': '18.3', 'adjPA': '17.1', 'Proj': '17.8'},
{'quarterback': 'Josh McCown', 'team': 'NYJ', 'home_away': 'vs.', 'opponent': 'KCC', 'adjPF': '17.9', 'adjPA': '17.8', 'Proj': '17.0'},
{'quarterback': 'Trevor Siemian', 'team': 'DEN', 'home_away': '@', 'opponent': 'MIA', 'adjPF': '15.9', 'adjPA': '20.9', 'Proj': '17.0'},
{'quarterback': 'Blaine Gabbert', 'team': 'ARI', 'home_away': 'vs.', 'opponent': 'LAR', 'adjPF': '21.1', 'adjPA': '14.6', 'Proj': '16.3'},
{'quarterback': 'Andy Dalton', 'team': 'CIN', 'home_away': 'vs.', 'opponent': 'PIT', 'adjPF': '16.7', 'adjPA': '15.3', 'Proj': '16.3'},
{'quarterback': 'Brett Hundley', 'team': 'GBP', 'home_away': 'vs.', 'opponent': 'TBB', 'adjPF': '15.0', 'adjPA': '20.8', 'Proj': '16.1'},
{'quarterback': 'Mitchell Trubisky', 'team': 'CHI', 'home_away': 'vs.', 'opponent': 'SFF', 'adjPF': '11.4', 'adjPA': '19.1', 'Proj': '15.7'},
{'quarterback': 'Matthew Stafford', 'team': 'DET', 'home_away': '@', 'opponent': 'BAL', 'adjPF': '20.4', 'adjPA': '11.8', 'Proj': '15.3'},
{'quarterback': 'Jay Cutler', 'team': 'MIA', 'home_away': 'vs.', 'opponent': 'DEN', 'adjPF': '13.7', 'adjPA': '18.0', 'Proj': '15.1'},
{'quarterback': 'Geno Smith', 'team': 'NYG', 'home_away': '@', 'opponent': 'OAK', 'adjPF': '12.1', 'adjPA': '21.4', 'Proj': '14.7'},
{'quarterback': 'Tom Savage', 'team': 'HOU', 'home_away': '@', 'opponent': 'TEN', 'adjPF': '12.0', 'adjPA': '20.9', 'Proj': '14.0'},
{'quarterback': 'Jimmy Garoppolo', 'team': 'SFF', 'home_away': '@', 'opponent': 'CHI', 'adjPF': '14.9', 'adjPA': '15.3', 'Proj': '13.7'},
{'quarterback': 'Joe Flacco', 'team': 'BAL', 'home_away': 'vs.', 'opponent': 'DET', 'adjPF': '10.0', 'adjPA': '18.6', 'Proj': '13.2'},
{'quarterback': 'DeShone Kizer', 'team': 'CLE', 'home_away': '@', 'opponent': 'LAC', 'adjPF': '16.0', 'adjPA': '14.2', 'Proj': '12.8'},
{'quarterback': 'Jacoby Brissett', 'team': 'IND', 'home_away': '@', 'opponent': 'JAC', 'adjPF': '16.7', 'adjPA': '11.0', 'Proj': '12.0'}
];

var matchups = [
'Alex Smith (KCC @ NYJ): 21.6 proj. pts.', 
'Tom Brady (NEP @ BUF): 21.1 proj. pts.', 
'Carson Wentz (PHI @ SEA): 20.8 proj. pts.', 
'Kirk Cousins (WAS @ DAL): 20.6 proj. pts.', 
'Philip Rivers (LAC vs. CLE): 20.2 proj. pts.', 
'Cam Newton (CAR @ NOS): 20 proj. pts.', 
'Russell Wilson (SEA vs. PHI): 19.6 proj. pts.', 
'Marcus Mariota (TEN vs. HOU): 19.5 proj. pts.', 
'Derek Carr (OAK vs. NYG): 18.8 proj. pts.', 
'Tyrod Taylor (BUF vs. NEP): 18.4 proj. pts.', 
'Case Keenum (MIN @ ATL): 18.4 proj. pts.', 
'Drew Brees (NOS vs. CAR): 18.3 proj. pts.', 
'Blake Bortles (JAC vs. IND): 18.2 proj. pts.', 
'Matt Ryan (ATL vs. MIN): 18.1 proj. pts.', 
'Jared Goff (LAR @ ARI): 18.1 proj. pts.', 
'Ben Roethlisberger (PIT @ CIN): 18 proj. pts.', 
'Jameis Winston (TBB @ GBP): 17.8 proj. pts.', 
'Dak Prescott (DAL vs. WAS): 17.8 proj. pts.', 
'Josh McCown (NYJ vs. KCC): 17.0 proj. pts.', 
'Trevor Siemian (DEN @ MIA): 17.0 proj. pts.', 
'Blaine Gabbert (ARI vs. LAR): 16.3 proj. pts.', 
'Andy Dalton (CIN vs. PIT): 16.3 proj. pts.', 
'Brett Hundley (GBP vs. TBB): 16.1 proj. pts.', 
'Mitchell Trubisky (CHI vs. SFF): 15.7 proj. pts.', 
'Matthew Stafford (DET @ BAL): 15.3 proj. pts.', 
'Jay Cutler (MIA vs. DEN): 15.1 proj. pts.', 
'Geno Smith (NYG @ OAK): 14.7 proj. pts.', 
'Tom Savage (HOU @ TEN): 14.0 proj. pts.', 
'Jimmy Garoppolo (SFF @ CHI): 13.7 proj. pts.', 
'Joe Flacco (BAL vs. DET): 13.2 proj. pts.', 
'DeShone Kizer (CLE @ LAC): 12.8 proj. pts.', 
'Jacoby Brissett (IND @ JAC): 12.0 proj. pts.', 
]