package ggp.example.movies.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="MOVIE")
public class Movie {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name="YEAR")
    private Integer year;

    @Column(name="NAME")
    private String name;

    @Column(name="DIRECTOR")
    private String director;

    @RestResource(exported = false)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "GENDER_ID", referencedColumnName = "ID")
    private Gender gender;
}
