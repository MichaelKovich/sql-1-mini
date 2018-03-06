SELECT * from Artist;

SELECT FirstName, LastName, Country
FROM Employee;

SELECT Name, Composer, Milliseconds
FROM Track
WHERE Milliseconds > 299000;

SELECT count(*) 
FROM Track 
WHERE Milliseconds > 299000;

// Black Diamond

SELECT AVG(milliseconds) FROM Track;  // Find the average length of all tracks in Milliseconds
SELECT count(*) FROM Invoice WHERE BillingCountry = 'USA';  // Find the number of invoices in the USA
SELECT * FROM Customer WHERE FirstName like '%a%'  // Make a list of all the First Names of Customers that contain an 'a'
SELECT * FROM Track ORDER BY milliseconds DESC LIMIT 10;  // Make a list of the 10 longest tracks
SELECT * FROM Track ORDER BY milliseconds LIMIT 20;  // Make a list of the 20 shortest tracks
SELECT * FROM Customer WHERE State = 'CA' OR State = 'WA';  // Find all the customers that live in California or Washington
SELECT * FROM Customer WHERE State in ('CA', 'WA', 'UT', 'FL', 'AZ');  // Find all the customers that live in California, Washington, Utah, Florida, or Arizona (Use IN keyword)
INSERT INTO Artist (ArtistId, Name) VALUES ('1992', 'Michael');  // Insert an artist to the database
INSERT INTO Customer (CustomerId, FirstName, LastName, Company, Address, City, State, Country, PostalCode, Phone, Fax, Email, SupportRepId) VALUES ('7586', 'Michael', 'Kovich', 'DMountain', 'Ervay', 'Dallas', 'TX', 'USA', '12345', '1234567890', '1234567890', 'michael', '5');  // Insert yourself as a customer to the database
SELECT * FROM Playlist WHERE Name LIKE 'Classical%';  // Find a list of all Playlists that start with Classical
  // You can either continue exploring this dataset or look into setting up postgres on your local machine.